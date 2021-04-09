# CHANGELOG

<a name="1.9"></a>

## [1.9](https://github.com/maicol07/flarum-ext-sso/compare/1.8.1...1.9)

> Released on April 08, 2021

### 👷 Building scripts changes

- [`da6515b`](https://github.com/maicol07/flarum-ext-sso/commit/da6515bdc70ebce4eacc7ebcaf7bcec1fa70fbd0) 💚 Fixed
  changelog generation
- [`563336b`](https://github.com/maicol07/flarum-ext-sso/commit/563336ba2b8980efee4a60c19dc28540b4bb46b4) 👷 Added
  CHANGELOG
- [`5ec3529`](https://github.com/maicol07/flarum-ext-sso/commit/5ec3529006686d44caae8a2b84bb0ca53d45a328) 📦 Missing
  bundled JS

### Other changes

- [`e0df539`](https://github.com/maicol07/flarum-ext-sso/commit/e0df5393aed028d510bb0fbacc0696b6f17e8b87) Updated
  composer.json metadata
- [`9ea9834`](https://github.com/maicol07/flarum-ext-sso/commit/9ea9834602a5497e109c6dc4e24cdd6799099eaa) **release:**
  🔖 1.9 final changelog

### 🐛 Bug Fixes

- [`830def6`](https://github.com/maicol07/flarum-ext-sso/commit/830def6f9e6da958cc3bc82e3e3ebfee742c7ff7) 🐛 Exception
  when updating user and `avatarUrl` is `null`
- [`978e1de`](https://github.com/maicol07/flarum-ext-sso/commit/978e1de28786a2219ec1c6f4b1396d41d31530ea) 🐛 Fixed issue
  with the Laravel Cookie helper

### ✨ Features

- [`6c802df`](https://github.com/maicol07/flarum-ext-sso/commit/6c802dff583aa417dc009da4473a6df52b626459) ✨ Allow
  updating user avatar via `avatarUrl` attribute
- [`bc56ed3`](https://github.com/maicol07/flarum-ext-sso/commit/bc56ed373661a9512b2aba278e0d38feabb4f0d0) ✨ New Login
  middleware
- [`3e033f8`](https://github.com/maicol07/flarum-ext-sso/commit/3e033f8c8d1969152da8250ddcd900b552e76c2d) ✨ Initial
  compatibility with beta16

### 🔄 Updates

- [`27b284e`](https://github.com/maicol07/flarum-ext-sso/commit/27b284eb0e6562906757c45ee71d3ee115627bc4) 💥 Updated JWT
  SSO to beta16

  Major changes:
    - 💥 Signer key must be plain text now. It will be encoded to base64 automatically
    - 💥 Login is no longer done with the login method (which is now named getToken) but will rely on the new middleware

### ⚡ Performance Improvements

- [`3cf884f`](https://github.com/maicol07/flarum-ext-sso/commit/3cf884fe7a8b060cba274f46612287415aa1f4c8) ⚡ Improved
  subscribers and listeners handling

<a name="1.8.1"></a>

## [1.8.1](https://github.com/maicol07/flarum-ext-sso/compare/1.8...1.8.1)

> Released on January 24, 2021

### ✨ Features

- [`650e369`](https://github.com/maicol07/flarum-ext-sso/commit/650e369567f18dbd156b6db305be9d37d0b36027) Default
  signing algorithm to Sha256
- [`5b75af1`](https://github.com/maicol07/flarum-ext-sso/commit/5b75af17d7a14fd15970dc0e7227e5e2ac77e0ad) Allow
  selecting signing algorithm

    - Support changes introduced in JWT Addon v1.1

### 🐛 Bug Fixes

- [`d1bc12c`](https://github.com/maicol07/flarum-ext-sso/commit/d1bc12c2bb9bfa85d38159a1baf8f9957c66cdac)
  js/package.json to reduce vulnerabilities

  The following vulnerabilities are fixed with an upgrade:
    - https://snyk.io/vuln/SNYK-JS-Y18N-1021887

### 🔀 Pull Requests

- [`6aa1a9a`](https://github.com/maicol07/flarum-ext-sso/commit/6aa1a9a8196444bba0073e43cdb9e364acbe0e1d) Merge pull
  request [#6](https://github.com/maicol07/flarum-ext-sso/issues/6) from
  maicol07/snyk-fix-8ac6c5f6423389c2f10deda46add1e6a

<a name="1.8"></a>

## [1.8](https://github.com/maicol07/flarum-ext-sso/compare/1.7...1.8)

> Released on December 23, 2020

### ⏪ Reverted

- [`9afa943`](https://github.com/maicol07/flarum-ext-sso/commit/9afa943971329f6c9111931475f0129d91b0632d) ⏪ Reverted
  slugs

    - Changed slugs for disable login and signup button to remove

### ✨ Features

- [`8303d8d`](https://github.com/maicol07/flarum-ext-sso/commit/8303d8d51fc0a034718f42c5aa93bdeec29e21f2) 🎉 Added
  manage account URL setting
- [`2b670d3`](https://github.com/maicol07/flarum-ext-sso/commit/2b670d389906440d6f4f6f5844e9283f5f04a885) 💄 New
  settings page!

    - Revamped settings page UI
    - Added metadata to composer.json
    - Removed fof/components as no longer used

### 🐛 Bug Fixes

- [`d567d5d`](https://github.com/maicol07/flarum-ext-sso/commit/d567d5db40e682dfae1f1dd2ba2aaa3d7164a1a0) Login modal
  not showing when extension is enabled but no login url is set
- [`62bd85f`](https://github.com/maicol07/flarum-ext-sso/commit/62bd85f5d5877867b67c6ef827e49ede70f91d23) 📦 Updated
  compiled files for the previous fix
- [`62f0ea5`](https://github.com/maicol07/flarum-ext-sso/commit/62f0ea585dc06e4c9b4c65c84f42ac4b56007590) Extending
  oninit hook and fixing modal redirection

### 👷 Building scripts changes

- [`8e84fad`](https://github.com/maicol07/flarum-ext-sso/commit/8e84fad5f827e8f60dcbbf1df87c0ac0e671dd5b) Added a new
  build-dev script

    - Upgraded dependencies

### Other changes

- [`d6cbab3`](https://github.com/maicol07/flarum-ext-sso/commit/d6cbab34c236088a6cc5f9256b1024691dd4233c) Changed
  settings slugs

### 🔀 Pull Requests

- [`9e074ce`](https://github.com/maicol07/flarum-ext-sso/commit/9e074cebd03195008122be54aeb920116861dcd5) Merge pull
  request [#7](https://github.com/maicol07/flarum-ext-sso/issues/7) from pedrorezende/master

  fix: Extending oninit hook and fixing modal redirection

<a name="1.7"></a>

## [1.7](https://github.com/maicol07/flarum-ext-sso/compare/1.6...1.7)

> Released on November 02, 2020

### Other changes

- [`5d6859b`](https://github.com/maicol07/flarum-ext-sso/commit/5d6859bb45595e3f31b1241f35981a6d583a626a) Fixed links to
  docs
- [`e04659a`](https://github.com/maicol07/flarum-ext-sso/commit/e04659a73fca2873fe4c2b1be8d460cb803091ac) PHP Backend -
  Removed deprecated methods
- [`429f8b2`](https://github.com/maicol07/flarum-ext-sso/commit/429f8b221f5572e65d95086ba5b9f78bc51d22e0) JS Backend -
  Compatibility with Beta 14
- [`148a845`](https://github.com/maicol07/flarum-ext-sso/commit/148a845adad414530ddc7be77a64cecbd34d6330) JS Frontend -
  Compatibility with beta 14
- [`18f7c04`](https://github.com/maicol07/flarum-ext-sso/commit/18f7c0416974d4f3e1252aa888fcaa673a29d7d2) 🚚 Renamed
  ForumFrontend middleware to LogoutMiddleware
- [`1c83b9f`](https://github.com/maicol07/flarum-ext-sso/commit/1c83b9fc753b050d51cb714f2bbf883c6a6cd3d4) Compatibility
  with Beta 14 (Part 1)

  DO NOT USE THIS IN PRODUCTION!!! COMPATIBILITY WITH BETA 14 HAS NOT BEEN TESTED YET!
- [`a2d7436`](https://github.com/maicol07/flarum-ext-sso/commit/a2d7436f80f087afd79474452e09754080db5539) JWT Token as
  Bearer Token
- [`af21cb3`](https://github.com/maicol07/flarum-ext-sso/commit/af21cb335ace2da48c3231dae9001182d2409005) 🙈 Updated
  .gitignore
- [`c57cd9c`](https://github.com/maicol07/flarum-ext-sso/commit/c57cd9c6e516398580f38f2da8ac03f7b6375d40) 🙈 Updated
  .gitignore
- [`f5d9bcb`](https://github.com/maicol07/flarum-ext-sso/commit/f5d9bcb9db0e61a5241fa20f73afa8d87fe9863b) 🙈 Updated
  .gitignore

### 🎨 Code styling

- [`1693bba`](https://github.com/maicol07/flarum-ext-sso/commit/1693bba998db2e3b78f55cb58b3a21fcb81ddbb9) **code:**
  Added Mithril JSX Key eslint rule

### 🐛 Bug Fixes

- [`da8d2d3`](https://github.com/maicol07/flarum-ext-sso/commit/da8d2d310b55ac1d5eb0f2ff201bb37f63f4ecce) Namespaces not
  added to composer.json
- [`2962c40`](https://github.com/maicol07/flarum-ext-sso/commit/2962c40cc8be81ab6dcd888e37bbb9fb03e93740) change query
  param

  Due to changes in previous commit
- [`3653ad4`](https://github.com/maicol07/flarum-ext-sso/commit/3653ad425af2daf2d95861e9ed9d2c30b6c35b19) Exception when
  logging out from Flarum
- [`8f1738d`](https://github.com/maicol07/flarum-ext-sso/commit/8f1738d0a1b5791bafc297f9051e4707b716c7ae) Exceptions
- [`1ea3d15`](https://github.com/maicol07/flarum-ext-sso/commit/1ea3d15456e643f893cda609df2e6195f8352143) 🐛 Fix
  logout (#FSSOE-1)

### ✨ Features

- [`a72ee71`](https://github.com/maicol07/flarum-ext-sso/commit/a72ee7138b0cdfc16389b0c5d1519fbda2e381ff) ✨ JWT
  Validation and login (#FSSOE-15)

    - Currently supports validation, login and signup Tracker feature: https://tracker.maicol07.it/issue/FSSOE-15

### ♻ Code Refactoring

- [`1e67cdc`](https://github.com/maicol07/flarum-ext-sso/commit/1e67cdc6b205408182603f4ec4831d98fb4e2533) ♻️ Refactor
  code
- [`15b4c7b`](https://github.com/maicol07/flarum-ext-sso/commit/15b4c7bb4d1a57b926c147393eef427ae8233824) ♻️ ESLint
  Refactor
- [`53a83e0`](https://github.com/maicol07/flarum-ext-sso/commit/53a83e0e34994522ca613c6d3b7ade6cb4806925) ♻️ 🎨
  Refactored code

    - Following PHP CS Fixer
    - Fixed not using spaces
- [`4bf937a`](https://github.com/maicol07/flarum-ext-sso/commit/4bf937a5c1d30239664ca750102eca5f3ab74e15) ♻️ 🎨
  Refactored code

    - Following PHP CS Fixer
    - PHP 7.2 requirement added
- [`09a810f`](https://github.com/maicol07/flarum-ext-sso/commit/09a810f6ce403907929a2c826b7e20f86ca22d1a) :fire: Removed
  links to the sample-website folder

### 🔀 Pull Requests

- [`e0412f5`](https://github.com/maicol07/flarum-ext-sso/commit/e0412f5653bfbfabc2e8659bf1cd69792f5a1dea) Merge pull
  request [#3](https://github.com/maicol07/flarum-ext-sso/issues/3) from maicol07/renovate/configure

<a name="1.6"></a>

## [1.6](https://github.com/maicol07/flarum-ext-sso/compare/1.5...1.6)

> Released on May 13, 2020

### ♻ Code Refactoring

- [`f7d2547`](https://github.com/maicol07/flarum-ext-sso/commit/f7d25475ef6c19eed7f1678e3ebb2725804762d9) :recycle:
  Deleted unused file

### Other changes

- [`29dfe1f`](https://github.com/maicol07/flarum-ext-sso/commit/29dfe1f0e5a232d5726db79227ced7e5102d2d37) :pushpin:
  Updated Flarum version
- [`278802c`](https://github.com/maicol07/flarum-ext-sso/commit/278802cbebc10043eff758716cbcdcb857ba285a) Silenced error
  on login form
- [`9cf664d`](https://github.com/maicol07/flarum-ext-sso/commit/9cf664d0ad1315544f64b05f7abd64655ac981fc) Slug rename

  Plugin slug has been renamed to sso-flarum. Naming conventions from now on:
    - Files: prefix-flarum-sso-suffix.ext
    - Options names, ids or function names: prefix_flarum_sso_plugin_suffix
    - Slugs, text domain and other slug-related strings: sso-flarum with eventually a prefix, suffix or extension

### 🐛 Bug Fixes

- [`db972f0`](https://github.com/maicol07/flarum-ext-sso/commit/db972f08aaed076c89eedb1921722f7aad25f884) Groups were
  not deleted from user
- [`9e75738`](https://github.com/maicol07/flarum-ext-sso/commit/9e757385b52215fd3f60f9b6eddb2496c541ae0e) Removing PRO
  key don't deactivate PRO features
- [`e7d0e89`](https://github.com/maicol07/flarum-ext-sso/commit/e7d0e8971313e22072ebbde8638a98f981cd7168) User can't
  login if it's not an admin
- [`f8d187f`](https://github.com/maicol07/flarum-ext-sso/commit/f8d187f60aaed25a40047ff07324aa657948f75a) Added missing
  class of previous commit
- [`83631f3`](https://github.com/maicol07/flarum-ext-sso/commit/83631f3b5ddccb7743a49dffa88fe00fdbd4b51a) User can't
  login if his id > 20

    * Better getUserList method. Now is public
    * Changed full parameter to filter (see API doc)
- [`796224f`](https://github.com/maicol07/flarum-ext-sso/commit/796224f84a0475b8cc92b01821a7868e42fab74c) #FSSOE-1
- [`1949cc3`](https://github.com/maicol07/flarum-ext-sso/commit/1949cc3b9e4320c2d95b3cd122390800c63b2831) Fixed
  not_authenticated error

### ✨ Features

- [`5a2b8e8`](https://github.com/maicol07/flarum-ext-sso/commit/5a2b8e89f2adc8dcba28c8fa278443e1d20ebdf2) Disable
  setting groups to admins
- [`925b83d`](https://github.com/maicol07/flarum-ext-sso/commit/925b83d04bf4d895364872ecbaf331ce72dcb0ef) Password reset

  Includes general code style reformat and some fixes for the pro login feature
- [`9b26adb`](https://github.com/maicol07/flarum-ext-sso/commit/9b26adbba831f6f86ccba6102eb04f645368c055) Groups setting
  on signup, update user

  Includes a general code style refactor and some fixes for the setGroup features

### 🎨 Code styling

- [`83cbd1e`](https://github.com/maicol07/flarum-ext-sso/commit/83cbd1e7b23e562a88cba0a4958d2c0928cd39f1) Rearranged
  code

### ⚡ Performance Improvements

- [`72492b4`](https://github.com/maicol07/flarum-ext-sso/commit/72492b4b1627b1344292ada4bf24e13c065ed1fd) Optimized
  login times

<a name="1.5"></a>

## [1.5](https://github.com/maicol07/flarum-ext-sso/compare/1.4.6...1.5)

> Released on April 08, 2020

### Other changes

- [`908402c`](https://github.com/maicol07/flarum-ext-sso/commit/908402c201596424e34f5ef320bea340347c603f) Release 1.0

    - Completely new WordPress plugin!
    - Settings page
    - PRO features (read more on docs)
    - In the nearby future will be published in the WordPress Plugins Directory!
- [`5022e6a`](https://github.com/maicol07/flarum-ext-sso/commit/5022e6addee102bbbecd4f94f632ec04d709b421) Release 1.0

    - BREAKING CHANGE! PHP 7+ required
    - BREAKING CHANGE! New request system: now using the great Flagrow API client
    - New Cookie management: now using the awesome Cookie library by Delight-im
    - New option: insecure mode (principally for local development, read in docs for more)
    - Added groups settings for users: you can now set a group for a user and, if doesn't exists, it will be created!
    - BREAKING CHANGE! Deleted sendRequest and get methods as no more used.
    - Code and performance improvements
    - Various fixes (see also the bug tracker)
- [`a680c9d`](https://github.com/maicol07/flarum-ext-sso/commit/a680c9d7c1f74476d565b55cd2019fabd88ef6d3) Removed json
  extension requirement
- [`d7ca1d1`](https://github.com/maicol07/flarum-ext-sso/commit/d7ca1d12aa8ddf4afe2b3415aae45083187ff4dd) New WordPress
  plugin

### ✨ Features

- [`a35a3c6`](https://github.com/maicol07/flarum-ext-sso/commit/a35a3c6b181d6e69a4cbddaf3e45a94406f62c53) Addded
  insecure mode and groups setting

<a name="1.4.6"></a>

## [1.4.6](https://github.com/maicol07/flarum-ext-sso/compare/1.4.5...1.4.6)

> Released on March 09, 2020

### Other changes

- [`59be4e6`](https://github.com/maicol07/flarum-ext-sso/commit/59be4e6efdc954a16faed2bddc97a65fa6421131) Allow
  installations on beta12

<a name="1.4.5"></a>

## [1.4.5](https://github.com/maicol07/flarum-ext-sso/compare/1.4.4...1.4.5)

> Released on February 06, 2020

### 🐛 Bug Fixes

- [`dc1345d`](https://github.com/maicol07/flarum-ext-sso/commit/dc1345d13a42125afcc13976fd1e10f62ffc3963) Missing import
  of AddFofComponents

  Signed-off-by: Maicol <maicolbattistini[@live](https://github.com/live).it>

<a name="1.4.4"></a>

## [1.4.4](https://github.com/maicol07/flarum-ext-sso/compare/1.4.3...1.4.4)

> Released on February 05, 2020

### 🐛 Bug Fixes

- [`890b15b`](https://github.com/maicol07/flarum-ext-sso/commit/890b15b3d29d81fbf5ea0b07eb7f7e88ceef0859) **admin:**
  Settings modal couldn't be opened

  Signed-off-by: Maicol <maicolbattistini[@live](https://github.com/live).it>

<a name="1.4.3"></a>

## [1.4.3](https://github.com/maicol07/flarum-ext-sso/compare/1.4.2...1.4.3)

> Released on January 20, 2020


<a name="1.4.2"></a>
## [1.4.2](https://github.com/maicol07/flarum-ext-sso/compare/1.4.1...1.4.2)

> Released on January 05, 2020


<a name="1.4.1"></a>
## [1.4.1](https://github.com/maicol07/flarum-ext-sso/compare/1.4.0...1.4.1)

> Released on January 05, 2020


<a name="1.4.0"></a>
## [1.4.0](https://github.com/maicol07/flarum-ext-sso/compare/1.3.2...1.4.0)

> Released on January 05, 2020


<a name="1.3.2"></a>
## [1.3.2](https://github.com/maicol07/flarum-ext-sso/compare/1.3.1...1.3.2)

> Released on October 16, 2019


<a name="1.3.1"></a>
## [1.3.1](https://github.com/maicol07/flarum-ext-sso/compare/1.3.0...1.3.1)

> Released on October 14, 2019


<a name="1.3.0"></a>
## [1.3.0](https://github.com/maicol07/flarum-ext-sso/compare/v1.2.0...1.3.0)

> Released on October 13, 2019


<a name="v1.2.0"></a>
## [v1.2.0](https://github.com/maicol07/flarum-ext-sso/compare/v1.1.2...v1.2.0)

> Released on January 19, 2019

### 🔀 Pull Requests

- [`0bcbe5c`](https://github.com/maicol07/flarum-ext-sso/commit/0bcbe5c0cfa847c4bbefea7fae6fde9d52734415) Merge pull
  request [#12](https://github.com/maicol07/flarum-ext-sso/issues/12) from sampoyigi/master

  Update to v0.1.0-beta.8.1
- [`d3270ba`](https://github.com/maicol07/flarum-ext-sso/commit/d3270ba51cd7e9b021d140cd540fa857797812eb) Merge pull
  request [#10](https://github.com/maicol07/flarum-ext-sso/issues/10) from glombers/patch-1

  Create pl.yml


<a name="v1.1.2"></a>
## [v1.1.2](https://github.com/maicol07/flarum-ext-sso/compare/v1.1.1...v1.1.2)

> Released on August 10, 2017

### 🔀 Pull Requests

- [`cb48499`](https://github.com/maicol07/flarum-ext-sso/commit/cb484991a1c62fbf890f0e86c8e3cbb98845b3a4) Merge pull
  request [#2](https://github.com/maicol07/flarum-ext-sso/issues/2) from zinsserzh/cleanSettings

  Remove the empty confusing Account section from setting page.


<a name="v1.1.1"></a>
## [v1.1.1](https://github.com/maicol07/flarum-ext-sso/compare/v1.1.0...v1.1.1)

> Released on July 09, 2017


<a name="v1.1.0"></a>
## [v1.1.0](https://github.com/maicol07/flarum-ext-sso/compare/v1.0.1...v1.1.0)

> Released on March 28, 2017


<a name="v1.0.1"></a>
## [v1.0.1](https://github.com/maicol07/flarum-ext-sso/compare/v1.0.0...v1.0.1)

> Released on March 11, 2017


<a name="v1.0.0"></a>
## v1.0.0

> Released on March 01, 2017

