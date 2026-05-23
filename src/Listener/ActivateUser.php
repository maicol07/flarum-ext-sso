<?php

namespace Maicol07\SSO\Listener;

use Flarum\User\Event\Registered;

class ActivateUser
{
    final public function __invoke(Registered $event): void
    {
        $user = $event->user;
        $user->activate();
        $user->save();
    }
}
