<?php

use Flarum\Extend;
use Flarum\User\Event\Deleted;
use Flarum\User\Event\LoggedIn;
use Flarum\User\Event\LoggedOut;
use Flarum\User\Event\Registered;
use Flarum\User\Event\Saving;
use Maicol07\SSO\JWTSSOController;
use Maicol07\SSO\Listener\ActivateUser;
use Maicol07\SSO\Listener\AddLogoutRedirect;
use Maicol07\SSO\Listener\LoadSettingsFromDatabase;
use Maicol07\SSO\Listener\ProviderModeListener;
use Maicol07\SSO\Listener\UserUpdated;
use Maicol07\SSO\Middleware\LoginMiddleware;
use Maicol07\SSO\Middleware\LogoutMiddleware;

$settings = [
    'signup_url',
    'login_url',
    'logout_url',
    'manage_account_url',
    'manage_account_btn_open_in_new_tab',
    'remove_login_btn',
    'remove_signup_btn',
    'provider_mode'
];

$settingsExtender = new Extend\Settings();
foreach ($settings as $name) {
    $settingsExtender->serializeToForum("maicol07-sso.$name", "maicol07-sso.$name");
}

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
        ->listen(Saving::class, [UserUpdated::class, 'updateAvatarUrl'])
        ->listen(Saving::class, [ProviderModeListener::class, 'updateUserInClients'])
        ->listen(LoggedIn::class, [ProviderModeListener::class, 'loginClients'])
        ->listen(Deleted::class, [ProviderModeListener::class, 'deleteUserInClients'])
        ->listen(LoggedOut::class, [ProviderModeListener::class, 'logoutUserInClients'])
        ->subscribe(LoadSettingsFromDatabase::class),

    // Middleware
    (new Extend\Middleware('forum'))
        ->add(LoginMiddleware::class)
        ->add(LogoutMiddleware::class),

    // Routes
    (new Extend\Routes('api'))->get('/sso/jwt', 'maicol07.jwt-auth', JWTSSOController::class),

    // Settings
    $settingsExtender
];
