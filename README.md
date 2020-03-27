# Flarum SSO

This extension equips Flarum with Single Sign On (shortly SSO). The workflow is based on this 
[post](https://discuss.flarum.org/d/2808-how-i-implemented-cross-authentication-with-flarum).
The extension is useful if you run Flarum on a subdomain but you want to use the login mechanism 
of your main website. A dummy main website is provided in the `sample-website/` folder.

## Installation

Install via command below or via Bazaar and activate the extension.
  ```
  composer require maicol07/flarum-ext-sso
  ```
  
## Configuration
Fill in redirect urls for login, signup and logout.

For WordPress you need to use these urls:
- **Login url**: `http://example.com/wp-login.php?redirect_to=forum` (The `redirect_to=forum` part is important as it will redirect your users back to the forum)
- **Logout url**: `http://example.com/wp-login.php?action=logout`
- **Signup url**: Depending on which plugin you use.
