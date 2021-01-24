<?php

namespace Maicol07\SSO;

use DateTimeZone;
use Exception;
use Flarum\Api\Client;
use Flarum\Api\Controller\CreateUserController;
use Flarum\Http\AccessToken;
use Flarum\Http\Rememberer;
use Flarum\Http\SessionAuthenticator;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Exception\PermissionDeniedException;
use Flarum\User\User;
use Flarum\User\UserRepository;
use Illuminate\Support\Str;
use InvalidArgumentException;
use Laminas\Diactoros\Response\JsonResponse;
use Lcobucci\Clock\SystemClock;
use Lcobucci\JWT\Configuration;
use Lcobucci\JWT\Signer\Key\InMemory;
use Lcobucci\JWT\Validation\Constraint\IssuedBy;
use Lcobucci\JWT\Validation\Constraint\PermittedFor;
use Lcobucci\JWT\Validation\Constraint\SignedWith;
use Lcobucci\JWT\Validation\Constraint\ValidAt;
use Lcobucci\JWT\Validation\RequiredConstraintsViolated;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use RuntimeException;

class JWTSSOController implements RequestHandlerInterface
{
    /** @var UserRepository */
    protected $users;

    /** @var Client */
    protected $api;

    /** @var SessionAuthenticator */
    protected $authenticator;

    /** @var Rememberer */
    protected $rememberer;

    /** @var string */
    protected $site_url;

    /** @var string */
    protected $iss;

    /** @var string */
    private $signing_algorithm;

    /** @var string */
    private $signer_key;

    /**
     * @param Client $api
     * @param SessionAuthenticator $authenticator
     * @param Rememberer $rememberer
     * @param UserRepository $users
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(
        Client $api,
        SessionAuthenticator $authenticator,
        Rememberer $rememberer,
        UserRepository $users,
        SettingsRepositoryInterface $settings
    ) {
        $this->api = $api;
        $this->authenticator = $authenticator;
        $this->rememberer = $rememberer;
        $this->users = $users;
        $conf = app('flarum.config');
        $this->site_url = $conf['url'];
        $this->iss = $settings->get('maicol07-sso.jwt_iss');
        $this->signing_algorithm = $settings->get('maicol07-sso.jwt_signing_algorithm') ?? 'Sha256';
        $this->signer_key = $settings->get('maicol07-sso.jwt_signer_key');
    }

    /**
     * @param Request $request
     * @return ResponseInterface
     * @throws PermissionDeniedException
     */
    public function handle(Request $request): ResponseInterface
    {
        // Get token
        $headers = $request->getHeader('Authorization');
        if (empty($headers)) {
            http_response_code(400);
            throw new InvalidArgumentException("No Authorization header was set");
        }

        /** @noinspection RegExpRedundantEscape */
        $header = preg_grep('/^Bearer\s[A-Za-z0-9\-_\=]+\.[A-Za-z0-9\-_\=]+\.?[A-Za-z0-9\-_.+\/\=]*$/', explode(', ', $headers[0]));
        if (empty($header)) {
            http_response_code(400);
            throw new InvalidArgumentException("No JWT found in Authorization headers");
        }

        $jwt = Str::after($header[0], 'Bearer ');
        $signing_algorithm = '\Lcobucci\JWT\Signer\Hmac\\' . $this->signing_algorithm;
        $config = Configuration::forSymmetricSigner(
            new $signing_algorithm(),
            InMemory::base64Encoded($this->signer_key)
        );
        $token = $config->parser()->parse($jwt);

        // Check if token is signed correctly
        if (!$config->validator()->validate($token, new SignedWith($config->signer(), $config->signingKey()))) {
            throw new PermissionDeniedException('Signature key does not correspond to the one on the token!');
        }

        $clock = new SystemClock(new DateTimeZone(date_default_timezone_get()));

        // Set validators
        $config->setValidationConstraints(
            new IssuedBy($this->iss),
            new PermittedFor($this->site_url),
            new ValidAt($clock)
        );

        try {
            $config->validator()->assert($token, ...$config->validationConstraints());
        } catch (RequiredConstraintsViolated $e) {
            throw new PermissionDeniedException(implode(',', $e->violations()));
        }

        // ↓↓ Added for IDE autocompletion
        /** @var \Maicol07\SSO\User $jwt_user */
        $jwt_user = $token->claims()->get('user');

        // remove any sizing params
        $avatar = $jwt_user->attributes->avatarUrl;
        $param = '?sz=';
        if (strpos($avatar, $param)) {
            $avatar = substr($avatar, 0, strpos($avatar, $param));
        }

        $user = $this->users->findByIdentification($jwt_user->attributes->email ?? $jwt_user->attributes->username);

        if ($user !== null) {
            $token = $this->login($user, $avatar, $request);
        } else {
            /** @noinspection PhpUndefinedFieldInspection */
            $jwt_user->attributes->isEmailConfirmed = true;

            $actor = $this->users->findOrFail(1);
            $body = [
                'data' => [
                    'attributes' => (array)$jwt_user->attributes,
                    'relationships' => (array)$jwt_user->relationships
                ]
            ];

            try {
                $response = $this->api->send(CreateUserController::class, $actor, [], $body);
            } catch (Exception $e) {
                throw new RuntimeException("Error during signup.");
            }

            $body = json_decode($response->getBody(), false);
            if (empty($body->data)) {
                throw new RuntimeException("Signup failed.");
            }
            $id = $body->data->id;
            $user = $this->users->findOrFail($id);
            $user->activate();
            $user->save();

            $token = $this->login($user, $avatar, $request);
        }

        return new JsonResponse([
            'token' => $token->token,
            'userId' => $user->id
        ]);
    }

    private function login(User $user, ?string $avatar, Request $request, ?ResponseInterface $response = null): AccessToken
    {
        // Login
        $id = $user->id;

        $user->changeAvatarPath($avatar);
        $user->save();

        $session = $request->getAttribute('session');
        $this->authenticator->logIn($session, $id);
        $token = AccessToken::generate($user->id);
        $token->save();

        if ($response !== null) {
            $this->rememberer->rememberUser($response, $id);
        }

        return $token;
    }
}
