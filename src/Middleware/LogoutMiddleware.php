<?php

namespace Maicol07\SSO\Middleware;

use Flarum\Foundation\Config;
use Flarum\Http\RequestUtil;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\RedirectResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;

class LogoutMiddleware implements MiddlewareInterface
{
    /**
     * @var Config
     */
    private $config;

    /** @var SettingsRepositoryInterface */
    private $settings;

    public function __construct(Config $config, SettingsRepositoryInterface $settings)
    {
        $this->config = $config;
        $this->settings = $settings;
    }

    final public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);
        $logout_url = resolve('flarum.forum.routes')->getPath('logout');
        $token = $request->getAttribute('session')->token();
        $path = $request->getUri()->getPath();
        $cookies = $request->getCookieParams();

        $prefix = $this->settings->get('maicol07-sso.cookies_prefix', 'flarum');

        if (Arr::exists($cookies, "{$prefix}_logout") and !$actor->isGuest() and $path !== $logout_url) {
            return new RedirectResponse($this->config->url()->__toString() . "$logout_url?token=$token&redirect=false&path=$path");
        }

        return $handler->handle($request);
    }
}
