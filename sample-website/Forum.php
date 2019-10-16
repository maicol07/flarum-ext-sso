<?php

/**
 * Class Flarum
 *
 * @author fabwu
 * @author maicol07
 * @package src
 */
class Flarum
{
    /* @var string Cookie name */
    const REMEMBER_ME_KEY = 'flarum_remember';

    /* @var object Config options */
    private $config;

    /**
     * Flarum constructor.
     */
    public function __construct()
    {
        $this->config = require __DIR__ . '/config.php';
    }

    /**
     * Logs the user in Flarum. Generally, you should use this method when an user successfully log into
     * your SSO system (or main website). If user is already signed up in Flarum database (not signed up with this
     * extension) you need to pass plain user password as third parameter (for example Flarum admin)
     *
     * @param string $username
     * @param string $email
     * @param string|null $password
     * @return string
     */
    public function login($username, $email, $password=null)
    {
        if (empty($password)) {
            $password = $this->createPassword($username);
        }
        $token = $this->getToken($username, $password);

        if (empty($token)) {
            $signed_up = $this->signup($username, $password, $email);
            if (!$signed_up) {
                return false;
            }
            $token = $this->getToken($username, $password);
        }

        return $this->setRememberCookie($token);
    }

    /**
     * Logs out the user from Flarum. Generally, you should use this method when an user successfully logged out from
     * your SSO system (or main website)
     */
    public function logout()
    {
        $this->removeCookie();
    }

    /**
     * Redirect the user to your Flarum instance
     */
    public function redirectToForum()
    {
        header('Location: ' . $this->config->flarum_url);
        die();
    }

    /**
     * Returns Flarum link
     *
     * @author maicol07
     * @return string
     */
    public function getForumLink() {
        return $this->config->flarum_url;
    }

    /**
     * Generates a password based on username and password token
     *
     * @param string $username
     * @return string
     */
    private function createPassword($username)
    {
        return hash('sha256', $username . $this->config->password_token);
    }

    /**
     * Get user token from Flarum (if user exists)
     *
     * @param string $username
     * @param string $password
     * @return string
     */
    private function getToken($username, $password)
    {
        $data = [
            'identification' => $username,
            'password' => $password,
            'lifetime' => $this->getLifetimeSeconds(),
        ];

        $response = $this->sendRequest('/api/token', $data);

        return isset($response['token']) ? $response['token'] : '';
    }

    /**
     * Sign up user in Flarum. Generally, you should use this method when an user successfully log into
     * your SSO system (or main website) and you found out that don't have a token (because has no account on Flarum)
     *
     * @param string $username
     * @param string $password
     * @param string $email
     * @return bool
     */
    private function signup($username, $password, $email)
    {
        $data = [
            "data" => [
                "type" => "users",
                "attributes" => [
                    "username" => $username,
                    "password" => $password,
                    "email" => $email,
                ]
            ]
        ];

        $response = $this->sendRequest('/api/users', $data);

        return isset($response['data']['id']);
    }

    /**
     * Deletes a user from Flarum database. Generally, you should use this method when an user successfully deleted
     * his account from your SSO system (or main website)
     *
     * @param string $username
     */
    public function delete($username) {
        $response = $this->sendRequest("/api/users/" . $username, [], 'GET');
        if (!empty($response['id'])) {
            $this->sendRequest("/api/users/" . $response['id'], [], 'DELETE');
        }
    }

    /**
     * Send a request to Flarum JSON API. Default method is POST.
     *
     * @param string $path
     * @param array $data
     * @param string $method
     * @return mixed
     */
    private function sendRequest($path, $data=[], $method='POST')
    {

        // use key 'http' even if you send the request to https://...
        $options = [
            'http' => [
                'header'  => 'Authorization: Token ' . $this->config->flarum_api_key . '; userId=1',
                'method'  => $method,
                'content' => http_build_query($data),
                'ignore_errors' => true
            ]
        ];
        $context  = stream_context_create($options);
        $result = file_get_contents($this->config->flarum_url . $path, false, $context);
        return json_decode($result, true);
    }

    /**
     * Set the remember me cookie
     *
     * @param string $token
     * @return bool
     */
    private function setRememberCookie($token)
    {
        return $this->setCookie(self::REMEMBER_ME_KEY, $token, time() + $this->getLifetimeSeconds());
    }

    /**
     * Remove the remember me cookie
     */
    private function removeCookie()
    {
        unset($_COOKIE[self::REMEMBER_ME_KEY]);
        return $this->setCookie(self::REMEMBER_ME_KEY, '', time() - 10);
    }

    /**
     * Set Flarum auth cookie
     *
     * @param string $key
     * @param string $token
     * @param int $time
     * @return bool
     */
    private function setCookie($key, $token, $time)
    {
        return setcookie($key, $token, $time, '/', $this->config->root_domain);
    }

    /**
     * Get Token lifetime in seconds
     *
     * @return float|int
     */
    private function getLifetimeSeconds()
    {
        return $this->config->lifetime_in_days * 60 * 60 * 24;
    }
}
