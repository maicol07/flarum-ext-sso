<?php

namespace Maicol07\SSO\Listener;

use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class LoadSettingsFromDatabase
{
    /** @var SettingsRepositoryInterface */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {

        $old_settings = array_filter($settings->all(), static function ($setting) {
            return strpos($setting, 'maicol07-sso.') !== false;
        }, ARRAY_FILTER_USE_KEY);
        if (!empty($old_settings)) {
            foreach ($old_settings as $setting_key => $setting) {
                $settings->set(str_replace('maicol07.sso.', 'maicol07-sso.', $setting_key), $setting);
                $settings->delete($setting_key);
            }
        }
        $this->settings = $settings;
    }

    public function subscribe(Dispatcher $events): void
    {

    }
}
