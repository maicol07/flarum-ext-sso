<?php

namespace Maicol07\SSO\Listener;

use Flarum\User\Event\LoggedOut;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class AddLogoutRedirect
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function subscribe(Dispatcher $events)
    {
        $events->listen(LoggedOut::class, [$this, 'addLogoutRedirect']);
    }

    public function addLogoutRedirect()
    {
        $url = $this->settings->get('maicol07-sso.logout_url');

        header('Location: ' . $url);
        die();
    }
}
