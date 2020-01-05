<?php

namespace Maicol07\SSO\Listener;


use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class LoadSettingsFromDatabase
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
    }

    public function prepareApiAttributes(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
        	$settings = [
        		'signup_url',
				'login_url',
				'logout_url',
				'disable_login_btn',
				'disable_signup_btn'
			];
        	foreach($settings as $setting) {
				$event->attributes['maicol07-sso.' . $setting] = $this->settings->get('maicol07-sso.' . $setting);
			}
        }
    }
}
