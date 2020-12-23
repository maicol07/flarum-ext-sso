<?php

namespace Maicol07\SSO\Listener;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Event\LoggedOut;
use Illuminate\Contracts\Events\Dispatcher;

class AddLogoutRedirect
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function subscribe(Dispatcher $events): void
    {
        $events->listen(LoggedOut::class, [$this, 'addLogoutRedirect']);
    }

    public function addLogoutRedirect(): void
    {
        if (isset($_GET['redirect']) and $_GET['redirect'] === 'false') {
            $url = app('flarum.config')['url'];
            header("Location: $url" . $_GET['path']);
            return;
        }
        $url = $this->settings->get('maicol07-sso.logout_url');

        header('Location: ' . $url);
        die();
    }
}
