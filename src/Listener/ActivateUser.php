<?php

namespace Maicol07\SSO\Listener;

use Flarum\User\Event\Registered;
use Illuminate\Contracts\Events\Dispatcher;

class ActivateUser
{
    public function subscribe(Dispatcher $events): void
    {
        $events->listen(Registered::class, [$this, 'activateUser']);
    }

    public function activateUser(Registered $event): void
    {
        $user = $event->user;
        $user->activate();
        $user->save();
    }
}
