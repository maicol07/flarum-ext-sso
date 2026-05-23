<?php

namespace Maicol07\SSO\Middleware;

use Flarum\Foundation\Config;
use Flarum\Http\AccessToken;
use Flarum\Http\RememberAccessToken;
use Flarum\Http\RequestUtil;
use Flarum\Http\SessionAccessToken;
use Flarum\Http\SessionAuthenticator;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\RedirectResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;

class LoginMiddleware implements MiddlewareInterface
{
    public function __construct(private Config $config, private SettingsRepositoryInterface $settings)
    {
    }

    final public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);
        $session = $request->getAttribute('session');
        $cookies = $request->getCookieParams();
        $prefix = $this->settings->get('maicol07-sso.cookies_prefix', 'flarum');
        $token = Arr::get($cookies, "{$prefix}_token");
        $remember_token = Arr::get($cookies, "{$prefix}_remember");

        $access_token = $token ? SessionAccessToken::findValid($token) : null;
        $remember_token = $remember_token ? RememberAccessToken::findValid($remember_token) : null;

        $token = $remember_token ?? $access_token;

        if ($token instanceof AccessToken && $actor->isGuest()) {
            resolve(SessionAuthenticator::class)->logIn($session, $token);
            return new RedirectResponse($this->config->url()->__toString() . $request->getUri()->getPath());
        }

        return $handler->handle($request);
    }
}
