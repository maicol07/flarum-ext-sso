<?php

use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;
use Maicol07\SSO\JWTSSOController;
use Maicol07\SSO\Listener;
use Maicol07\SSO\Middleware\LogoutMiddleware;

$routes = app('flarum.forum.routes');

return [
    // Frontend extenders (JS)
    (new Extend\Frontend('forum'))->js(__DIR__ . '/js/dist/forum.js'),
    (new Extend\Frontend('admin'))->js(__DIR__ . '/js/dist/admin.js'),

    // Locales
    new Extend\Locales(__DIR__ . '/locale'),

    // Events
    function (Dispatcher $events) {
        $events->subscribe(Listener\AddLogoutRedirect::class);
        $events->subscribe(Listener\ActivateUser::class);
        $events->subscribe(Listener\LoadSettingsFromDatabase::class);
    },

    // Middleware
    (new Extend\Middleware('forum'))->add(LogoutMiddleware::class),

    // Routes
    (new Extend\Routes('api'))->get('/sso/jwt', 'maicol07.jwt-auth', JWTSSOController::class),

    // Settings
    (new Extend\Settings())
        ->serializeToForum('maicol07.sso.signup_url', 'maicol07.sso.signup_url')
        ->serializeToForum('maicol07.sso.login_url', 'maicol07.sso.login_url')
        ->serializeToForum('maicol07.sso.logout_url', 'maicol07.sso.logout_url')
];
