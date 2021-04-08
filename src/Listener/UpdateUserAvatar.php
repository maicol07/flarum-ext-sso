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
        $avatar_url = Arr::get($event->data, 'attributes.avatarUrl');

        if (!empty($avatar_url)) {
            $image = (new ImageManager())->make($avatar_url);
            resolve(AvatarUploader::class)->upload($user, $image);
        }
    }
}
