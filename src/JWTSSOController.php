<?php

namespace Maicol07\SSO;

use DateTimeZone;
use Flarum\Bus\Dispatcher;
use Flarum\Http\RememberAccessToken;
use Flarum\Http\SessionAccessToken;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Command\RegisterUser;
use Flarum\User\Exception\PermissionDeniedException;
use Flarum\User\User;
use Flarum\User\UserRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use InvalidArgumentException;
use Laminas\Diactoros\Response\JsonResponse;
use Lcobucci\Clock\SystemClock;
use Lcobucci\JWT\Configuration;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Signer\Hmac\Sha384;
use Lcobucci\JWT\Signer\Hmac\Sha512;
use Lcobucci\JWT\Signer\Key\InMemory;
use Lcobucci\JWT\Validation\Constraint\IssuedBy;
use Lcobucci\JWT\Validation\Constraint\LooseValidAt;
use Lcobucci\JWT\Validation\Constraint\PermittedFor;
use Lcobucci\JWT\Validation\Constraint\SignedWith;
use Lcobucci\JWT\Validation\RequiredConstraintsViolated;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;

class JWTSSOController implements RequestHandlerInterface
{
    /** @var UserRepository */
    private $users;

    /** @var Dispatcher */
    private $bus;

    /** @var string */
    private $site_url;

    /** @var string */
    private $iss;

    /** @var string */
    private $signing_algorithm;

    /** @var string */
    private $signer_key;

    /**
     * @param Dispatcher $bus
     * @param UserRepository $users
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(
        Dispatcher                  $bus,
        UserRepository              $users,
        SettingsRepositoryInterface $settings
    )
    {
        $this->bus = $bus;
        $this->users = $users;
        $this->site_url = resolve('flarum.config')['url'];
        $this->iss = $settings->get('maicol07-sso.jwt_iss');
        $this->signing_algorithm = $settings->get('maicol07-sso.jwt_signing_algorithm') ?? 'Sha256';
        $this->signer_key = $settings->get('maicol07-sso.jwt_signer_key');
    }

    /**
     * @param Request $request
     * @return ResponseInterface
     *
     * @throws PermissionDeniedException
     *
     * @noinspection RegExpRedundantEscape
     */
    final public function handle(Request $request): ResponseInterface
    {
        // Get token
        $headers = $request->getHeader('Authorization');
        if (empty($headers)) {
            http_response_code(400);
            throw new InvalidArgumentException("No Authorization header was set");
        }

        $header = preg_grep('/^Bearer\s[A-Za-z0-9\-_\=]+\.[A-Za-z0-9\-_\=]+\.?[A-Za-z0-9\-_.+\/\=]*$/', explode(', ', $headers[0]));
        if (empty($header)) {
            http_response_code(400);
            throw new InvalidArgumentException("No JWT found in Authorization headers");
        }

        $jwt = Str::after($header[0], 'Bearer ');
        $signing_algorithm = null;
        switch ($this->signing_algorithm) {
            case 'Sha256':
                $signing_algorithm = new Sha256();
                break;
            case 'Sha384':
                $signing_algorithm = new Sha384();
                break;
            case 'Sha512':
                $signing_algorithm = new Sha512();
                break;
        }
        $config = Configuration::forSymmetricSigner(
            $signing_algorithm,
            InMemory::base64Encoded(base64_encode($this->signer_key))
        );
        $jwt = $config->parser()->parse($jwt);

        // Check if token is signed correctly
        if (!$config->validator()->validate($jwt, new SignedWith($config->signer(), $config->signingKey()))) {
            throw new PermissionDeniedException('Signature key does not correspond to the one on the token!');
        }

        $clock = new SystemClock(new DateTimeZone(date_default_timezone_get()));

        // Set validators
        $config->setValidationConstraints(
            new IssuedBy($this->iss),
            new PermittedFor($this->site_url),
            new LooseValidAt($clock)
        );

        try {
            $config->validator()->assert($jwt, ...$config->validationConstraints());
        } catch (RequiredConstraintsViolated $e) {
            throw new PermissionDeniedException(implode(',', $e->violations()));
        }

        $jwt_user = $jwt->claims()->get('user');

        // remove any sizing params
        $avatar = Arr::get($jwt_user, 'attributes.avatarUrl');
        $param = '?sz=';
        if (strpos($avatar, $param)) {
            $avatar = substr($avatar, 0, strpos($avatar, $param));
        }

        try {
            $user = $this->users->findOrFail(Arr::get($jwt_user, 'id'));
        } catch (ModelNotFoundException $e) {
            $email = Arr::get($jwt_user, 'attributes.email');
            $username = Arr::get($jwt_user, 'attributes.username');
            $user = $this->users->findByIdentification($email ?? $username);
        }

        if ($user === null) {
            Arr::set($jwt_user, 'attributes.isEmailConfirmed', true);

            $actor = $this->users->findOrFail(1);
            $data = Arr::except($jwt_user, 'id');

            // User is already activated since the isEmailConfirmed attribute has been set to true
            $user = $this->bus->dispatch(new RegisterUser($actor, $data));
            assert($user instanceof User);
        }

        $user->changeAvatarPath($avatar);
        $user->save();

        $token = $this->getToken($user, $jwt->claims()->get('remember'));

        return new JsonResponse([
            'token' => $token,
            'userId' => $user->id
        ]);
    }

    private function getToken(User $user, bool $remember = false): string
    {
        /** @noinspection PhpUnhandledExceptionInspection */
        $token = $remember ? RememberAccessToken::generate($user->id) : SessionAccessToken::generate($user->id);
        $token->save();

        return $token->token;
    }
}
