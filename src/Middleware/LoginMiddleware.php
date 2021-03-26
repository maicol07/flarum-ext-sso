<?php

namespace Maicol07\SSO\Middleware;

use Flarum\Http\SessionAccessToken;
use Flarum\Http\SessionAuthenticator;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\RedirectResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;

class LoginMiddleware implements MiddlewareInterface
{
    final public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $actor = $request->getAttribute('actor');
        $session = $request->getAttribute('session');
        $cookies = $request->getCookieParams();
        $token = SessionAccessToken::findValid(Arr::get($cookies, 'flarum_token'));

        if ($token !== null and $actor->isGuest()) {
            resolve(SessionAuthenticator::class)->logIn($session, $token);
            return new RedirectResponse($request->getUri());
        }

        return $handler->handle($request);
    }
}
