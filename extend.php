<?php

use Flarum\Extend;
use Flarum\User\Event\LoggedOut;
use Flarum\User\Event\Registered;
use Flarum\User\Event\Saving;
use Maicol07\SSO\JWTSSOController;
use Maicol07\SSO\Listener\ActivateUser;
use Maicol07\SSO\Listener\AddLogoutRedirect;
use Maicol07\SSO\Listener\LoadSettingsFromDatabase;
use Maicol07\SSO\Listener\UpdateUserAvatar;
use Maicol07\SSO\Middleware\LoginMiddleware;
use Maicol07\SSO\Middleware\LogoutMiddleware;

return [
    // Frontend extenders (JS)
    (new Extend\Frontend('forum'))->js(__DIR__ . '/js/dist/forum.js'),
    (new Extend\Frontend('admin'))->js(__DIR__ . '/js/dist/admin.js'),

    // Locales
    new Extend\Locales(__DIR__ . '/locale'),

    // Events
    (new Extend\Event())
        ->listen(Registered::class, [ActivateUser::class, 'activateUser'])
        ->listen(LoggedOut::class, [AddLogoutRedirect::class, 'addLogoutRedirect'])
        ->listen(Saving::class, [UpdateUserAvatar::class, 'updateAvatarUrl'])
        ->subscribe(LoadSettingsFromDatabase::class),

    // Middleware
    (new Extend\Middleware('forum'))
        ->add(LoginMiddleware::class)
        ->add(LogoutMiddleware::class),

    // Routes
    (new Extend\Routes('api'))->get('/sso/jwt', 'maicol07.jwt-auth', JWTSSOController::class),

    // Settings
    (new Extend\Settings())
        ->serializeToForum('maicol07-sso.signup_url', 'maicol07-sso.signup_url')
        ->serializeToForum('maicol07-sso.login_url', 'maicol07-sso.login_url')
        ->serializeToForum('maicol07-sso.logout_url', 'maicol07-sso.logout_url')
        ->serializeToForum('maicol07-sso.manage_account_url', 'maicol07-sso.manage_account_url')
        ->serializeToForum('maicol07-sso.manage_account_btn_open_in_new_tab', 'maicol07-sso.manage_account_btn_open_in_new_tab')
        ->serializeToForum('maicol07-sso.remove_login_btn', 'maicol07-sso.remove_login_btn')
        ->serializeToForum('maicol07-sso.remove_signup_btn', 'maicol07-sso.remove_signup_btn')
];
