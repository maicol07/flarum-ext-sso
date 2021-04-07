<?php

namespace Maicol07\SSO\Listener;

use Flarum\User\AvatarUploader;
use Flarum\User\Event\Saving;
use Illuminate\Support\Arr;
use Intervention\Image\ImageManager;

class UpdateUserAvatar
{
    final public function updateAvatarUrl(Saving $event): void
    {
        $user = $event->user;
        $attributes = Arr::get($event->data, 'attributes', []);

        if (Arr::exists($attributes, 'avatarUrl')) {
            $image = (new ImageManager())->make(Arr::get($attributes, 'avatarUrl'));
            resolve(AvatarUploader::class)->upload($user, $image);
        }
    }
}
