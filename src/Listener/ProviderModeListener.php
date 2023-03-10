<?php

namespace Maicol07\SSO\Listener;

use Flarum\Foundation\Config;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Event\Deleted;
use Flarum\User\Event\LoggedIn;
use Flarum\User\Event\Saving;
use Maicol07\SSO\Flarum;

class ProviderModeListener
{
    /** @return SettingsRepositoryInterface */
    private $settings;

    /** @var Config $config
     * @noinspection VirtualTypeCheckInspection
     */
    private $config;

    public function __construct(SettingsRepositoryInterface $settings, Config $config)
    {
        $this->settings = $settings;
        $this->config = $config;
    }

    final public function loginClients(LoggedIn $event): void
    {
        $user = $event->user;

        foreach ($this->getClients(['remember' => $event->token->type === 'session_remember']) as $client) {
            $sso_user = $client->user($user->username);
            $sso_user->attributes->email = $user->email;
            $sso_user->attributes->password = $user->password;
            $sso_user->attributes->bio = $user->username;
            $sso_user->attributes->avatarUrl = $user->avatar_url;
            $sso_user->attributes->nickname = $user->nickname;

            $sso_user->relationships->groups = $user->groups()->pluck('name_singular')->all();

            $res = $sso_user->login();
        }
    }

    /**
     * @return array<Flarum>
     */
    private function getClients(array $options = []): array
    {
        $clients = [];
        if ($this->settings->get('maicol07-sso.provider_mode') === '1') {
            $flarumUrl = $this->config->url();
            for ($i = 1; ($clientUrl = $this->settings->get("maicol07-sso.client{$i}_url")) !== null; $i++) {
                $rootDomain = (string)$flarumUrl;
                $clientUrlHost = parse_url($clientUrl, PHP_URL_HOST);
                $clientUrlDomain = substr($clientUrlHost, strpos($clientUrlHost, '.') + 1);
                $flarumUrlDomain = substr($rootDomain, strpos($rootDomain, '.') + 1);
                if ($flarumUrlDomain === $clientUrlDomain && $flarumUrl->getHost() !== $clientUrlHost) {
                    $rootDomain = '.' . $clientUrlDomain;
                }

                $clients[] = new Flarum(array_merge([
                    'url' => $clientUrl,
                    'root_domain' => $rootDomain,
                    'api_key' => $this->settings->get("maicol07-sso.client{$i}_api_key"),
                    'password_token' => $this->settings->get("maicol07-sso.client{$i}_password_token"),
                    'verify_ssl' => $this->settings->get("maicol07-sso.client{$i}_verify_ssl") === '1',
                    'cookies_prefix' => $this->settings->get("maicol07-sso.client{$i}_name", $clientUrl)
                ], $options));
            }
        }
        return $clients;
    }

    final public function updateUserInClients(Saving $event): void
    {
        $user = $event->user;

        foreach ($this->getClients() as $client) {
            $sso_user = $client->user($user->username);
            foreach ($event->data as $attribute => $value) {
                $sso_user->attributes->{$attribute} = $value;
            }

            $sso_user->relationships->groups = $user->groups()->pluck('name_singular')->all();

            $sso_user->update();
        }
    }

    final public function deleteUserInClients(Deleted $event): void
    {
        $user = $event->user;

        foreach ($this->getClients() as $client) {
            $sso_user = $client->user($user->username);
            $sso_user->delete();
        }
    }

    final public function logoutUserInClients(): void
    {
        foreach ($this->getClients() as $client) {
            $client->logout();
        }
    }
}
