# Flarum SSO

This extension equips Flarum with Single Sign On (shortly SSO). The workflow is based on this 
[post](https://discuss.flarum.org/d/2808-how-i-implemented-cross-authentication-with-flarum).
The extension is useful if you run Flarum on a subdomain but you want to use the login mechanism 
of your main website. A dummy main website is provided in the `sample-website/` folder.

## Installation

1. Create a random token (40 characters, you can use [this tool](https://onlinerandomtools.com/generate-random-string) to make one) and put it into the `api_keys` table of your Flarum database.
You only need to set the `key` column and the `user_id` one. The first set to your new generated token and the second to your admin user id.

2. Go into `sample-website` folder and copy `config.php.dist` to `config.php`:
  ```
  cd sample-website/
  cp config.php.dist config.php
  ```
3. Open `config.php` with an editor of your choice and configure all settings.

4. Upload the `Forum.php` class and `config.php` to your main website and setup the `Forum.php` class. An example is given in `index.php` / `logout.php`.

5. Install via command below or via Bazaar and activate the extension. Fill in redirect urls for login, signup and logout.
  ```
  composer require maicol07/flarum-ext-sso
  ```
6. Now you should able to log in with your existing users.

## Wordpress

This extension comes with a Wordpress plugin which allows you to login into Wordpress and gain also access to your Flarum
forum. In order to install the plugin execute the following steps after adding an api key to Flarum (see Step 1 above):

1. Upload the `sample-website` folder into the plugin folder (`/wp-content/plugins/`) of your wordpress instance.

2. Rename it to a name of your choice (e.g. `flarum-sso`).

3. Copy `config.php.dist` to `config.php` and configure all settings.

4. Activate the plugin in the settings.

5. Install and activate the Flarum extension using the command below or via Bazaar.
  ```
  composer require maicol07/flarum-ext-sso
  ```

6. Fill in the correct urls according to your wordpress instance:
   
   **Login-Url**: `http://example.com/wp-login.php?redirect_to=forum` 
   
   (The `redirect_to=forum` part is important as it will redirect your users back to the forum)
   
   **Logout-Url**: `http://example.com/wp-login.php?action=logout`
   
   **Signup-Url**: Depending on which plugin you use.

7. That's it!

## Special cases
If you have an SSO system built at `account.example.com` (so in a subdomain) and your Flarum installation at `forum.example.com` (so another subdomain)
you must set the `root_domain` option in `config.php` to `example.com` (the **root domain**, not the subdomain `account.example.com`)
While this is possible, it's not possible to get this extension working on two different domains (`example.com`,  `example2.com`) due to cookies limitation ([see here for more info](https://stackoverflow.com/a/6761443))
