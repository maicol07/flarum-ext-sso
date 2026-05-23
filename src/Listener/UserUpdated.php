<?php

namespace Maicol07\SSO\Listener;

use Flarum\User\AvatarUploader;
use Flarum\User\Event\Saving;
use Illuminate\Support\Arr;
use Intervention\Image\ImageManager;

readonly class UserUpdated
{
    public function __construct(
        private ImageManager $imageManager
    ) {}

    final public function updateAvatarUrl(Saving $event): void
    {
        $user = $event->user;
        $avatar_url = Arr::get($event->data, 'attributes.avatarUrl');

        if (!empty($avatar_url)) {
            $image = $this->imageManager->read($avatar_url);
            resolve(AvatarUploader::class)->upload($user, $image);
        }
    }
}
