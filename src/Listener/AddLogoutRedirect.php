<?php

namespace Maicol07\SSO\Listener;

use Flarum\Settings\SettingsRepositoryInterface;

class AddLogoutRedirect
{
    private $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    final public function addLogoutRedirect(): void
    {
        if (isset($_GET['redirect']) && $_GET['redirect'] === 'false') {
            $url = resolve('flarum.config')['url'];
            header("Location: $url" . $_GET['path']);
            return;
        }

        if ($this->settings->get('maicol07-sso.provider_mode') !== '1') {
            $url = $this->settings->get('maicol07-sso.logout_url');

            header('Location: ' . $url);
            die();
        }
    }
}
