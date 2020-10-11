<?php

use Flarum\Extend;
use FoF\Components\Extend\AddFofComponents;
use Illuminate\Contracts\Events\Dispatcher;
use Maicol07\SSO\JwtSSOController;
use Maicol07\SSO\Listener;
use Maicol07\SSO\Middleware\ForumFrontend;

$routes = app('flarum.forum.routes');

return [
    // FoF Components
    new AddFofComponents(),

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
    (new Extend\Middleware('forum'))->add(ForumFrontend::class),

    // Routes
    (new Extend\Routes('api'))->get('/sso/jwt', 'maicol07.jwt-auth', JwtSSOController::class)
];
