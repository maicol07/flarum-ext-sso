# CHANGELOG


<a name="1.10.2"></a>
## [1.10.2](https://github.com/maicol07/flarum-ext-sso/compare/1.10.1...1.10.2)

> Released on August 09, 2021

### ✨ Features
- [`fd9bc60`](https://github.com/maicol07/flarum-ext-sso/commit/fd9bc60f9eef914f637aecdc4fd6be16c0af4f88) ✨ Added Typescript config to get Flarum typing definitions
- [`8b70076`](https://github.com/maicol07/flarum-ext-sso/commit/8b70076deea992c7a69ae45a10d49077edaaef77) **code_tools:** ✨ Added Prettier instead of ESLint

### ⚡ Performance Improvements
- [`6fbd7f9`](https://github.com/maicol07/flarum-ext-sso/commit/6fbd7f990dd55f2a74dcd34e82f92521f55a1c65) ⚡ Better frontend settings helper

### 🐛 Bug Fixes
- [`3e24b49`](https://github.com/maicol07/flarum-ext-sso/commit/3e24b492adb415f6b6dd1508523421155dedefdf) New Discussion button opening the Login modal

    Also did some major refactor
- [`41d1f44`](https://github.com/maicol07/flarum-ext-sso/commit/41d1f44b2507a1eacbcb1ea655b9d53af63739c1) 🐛 Fixed login modal opening when new discussion button is clicked
- [`ddb3082`](https://github.com/maicol07/flarum-ext-sso/commit/ddb3082801a6ec486490991d4f87c28e58206077) 🐛 Fixed login modal opening when new discussion button is clicked
- [`f9cb9f4`](https://github.com/maicol07/flarum-ext-sso/commit/f9cb9f4c957fd0ffb9ee3b2b8ff88b19e3b1cd51) 🐛 Wrong app namespace

### ♻ Code Refactoring
- [`3dce5dc`](https://github.com/maicol07/flarum-ext-sso/commit/3dce5dc3b0d87dff62e7013b6adbe36519551823) Reformatted build action
- [`edbd507`](https://github.com/maicol07/flarum-ext-sso/commit/edbd507f36832ec95f88eeb83898408e42f804d2) ♻️ Removed old Webpack config
- [`f17a9a5`](https://github.com/maicol07/flarum-ext-sso/commit/f17a9a5057cb1241f9c56a9118a277ba5526bfa5) ♻️ Removed ESLint comments

### 👷 CI changes
- [`3233f94`](https://github.com/maicol07/flarum-ext-sso/commit/3233f943c4988562c5ce48c82eb58e2fdee3f7a5) Trigger changelog workflow when JS build has finished
- [`f244d0f`](https://github.com/maicol07/flarum-ext-sso/commit/f244d0f4d99085740c1ae633a0d1db3aeec3b069) Updated build action
- [`b8e32e2`](https://github.com/maicol07/flarum-ext-sso/commit/b8e32e23cd3f562af0de63082134504989dadfb6) 👷 Added Flarum Bot to automatically compile JS
- [`646203c`](https://github.com/maicol07/flarum-ext-sso/commit/646203ce9c6c98d9b9f6c747d82c420e36903c92) 👷 Added conditional commit messages to changelog action
- [`086bdea`](https://github.com/maicol07/flarum-ext-sso/commit/086bdeae4e9b61b79857eea269ff2640fd10c088) 👷 Updated changelog generation

### Other changes
- [`5035a00`](https://github.com/maicol07/flarum-ext-sso/commit/5035a005ebc2913dc478499c86ce4174a49d1463) Updated compiled JS
- [`4145636`](https://github.com/maicol07/flarum-ext-sso/commit/41456364e5f6dc6b086eba83bb33beee4268a5fc) **deps:** ⬆️ Upgraded Flarum Webpack config
- [`3e99300`](https://github.com/maicol07/flarum-ext-sso/commit/3e993006fb9e97d839010ffa39d7939f8424a5e9) **meta:** Updated extension icon colors for better contrast


<a name="1.10.1"></a>
## [1.10.1](https://github.com/maicol07/flarum-ext-sso/compare/1.10...1.10.1)

> Released on June 12, 2021

### ⚡ Performance Improvements
- [`b74c90c`](https://github.com/maicol07/flarum-ext-sso/commit/b74c90cb94c6cf3323614228dcf600f3b1fdf7c4) ⚡ Use dot notation to set array value

### 🐛 Bug Fixes
- [`1f0c404`](https://github.com/maicol07/flarum-ext-sso/commit/1f0c404e6098ade4d8e18004f1621feed0bc6135) 🐛 JWT signup not working
- [`8b1673f`](https://github.com/maicol07/flarum-ext-sso/commit/8b1673fdfd0951c7e5206b8adab9696bc4bbc679) 🐛 login middleware redirect ([#12](https://github.com/maicol07/flarum-ext-sso/issues/12))

### 📝 Docs changes
- [`5e84bf4`](https://github.com/maicol07/flarum-ext-sso/commit/5e84bf42ceb3977329d5ded195f316294173d06c) 📝 Fixed PHPDocs

### 👷 Building scripts changes
- [`8f3d699`](https://github.com/maicol07/flarum-ext-sso/commit/8f3d69952c5565635eddab00f3a4f4963673ef83) Allow to run changelog action manually to set the next version
- [`5cb1154`](https://github.com/maicol07/flarum-ext-sso/commit/5cb1154d10ee0a86a4a25225316e1a08cde73de6) Add git credentials
- [`a10765e`](https://github.com/maicol07/flarum-ext-sso/commit/a10765e7d1900020e21247eff1427d068e52bb81) Add missing commit
- [`c009c2e`](https://github.com/maicol07/flarum-ext-sso/commit/c009c2e1b8b93099e06f824e376b27d6cb49a569) Add missing token to push back changes
- [`8ab1c6f`](https://github.com/maicol07/flarum-ext-sso/commit/8ab1c6ff262d0645dccb470962aff860e1393ffa) Push CHANGELOG.md back to repo
- [`c2e6ce4`](https://github.com/maicol07/flarum-ext-sso/commit/c2e6ce45c7b23ef2f42d8c8d99bfba1acb6e03c8) Trying to debug again...
- [`9664c5a`](https://github.com/maicol07/flarum-ext-sso/commit/9664c5a884e04785b96fdf69da091757c65cf48b) Trying to debug again...
- [`44e8ccd`](https://github.com/maicol07/flarum-ext-sso/commit/44e8ccd0281475bd9547994092b2eca595ee6fb3) Trying to debug again...
- [`b705c4f`](https://github.com/maicol07/flarum-ext-sso/commit/b705c4f391edfc94303e72b44a86de601ac7bbd0) Ensure changelog is saved to file
- [`ec11208`](https://github.com/maicol07/flarum-ext-sso/commit/ec11208a9a936b565f1c9f4bb7ffc5b8474d16bc) Fix changelog action branch
- [`801fc90`](https://github.com/maicol07/flarum-ext-sso/commit/801fc9073a4c1e06f55abcc0b923153e45db2a47) Missing checkout action
- [`9e88ba2`](https://github.com/maicol07/flarum-ext-sso/commit/9e88ba2e4e8edc9fc627c6985b7280996700ed87) Debug Changelog action (Part 2)
- [`c9148a3`](https://github.com/maicol07/flarum-ext-sso/commit/c9148a3df21bdf77811ed9ed5f8523649c479562) Debug Changelog action (Part 1)
- [`7c3b9bf`](https://github.com/maicol07/flarum-ext-sso/commit/7c3b9bf7702fc4a128122de8fc3d2d57250b9b21) Fix Changelog action (5th attempt)
- [`df60303`](https://github.com/maicol07/flarum-ext-sso/commit/df60303d434d021eb37b6db3cf10401a0eeff7b5) Fix Changelog action (4th attempt)
- [`33f2e49`](https://github.com/maicol07/flarum-ext-sso/commit/33f2e49576ade3a97f56229b9056e0f65f0e912f) Fix Changelog action (4th attempt)
- [`62a219b`](https://github.com/maicol07/flarum-ext-sso/commit/62a219bc27e92e13dfc0e7f060a748a3cd24bae6) Fix Changelog action (3rd attempt)
- [`1513c86`](https://github.com/maicol07/flarum-ext-sso/commit/1513c86854f2f3fbada6b221dfba972799ba7d69) Fix Changelog action (2nd attempt)
- [`cdd86ea`](https://github.com/maicol07/flarum-ext-sso/commit/cdd86eacebe534fa5167628de1507b42fe3663bb) Fix Changelog action

### Other changes
- [`69b9e7e`](https://github.com/maicol07/flarum-ext-sso/commit/69b9e7e21207a4213b8b4ea096f4777550fb7247) Added more author metadata to `composer.json`
- [`fcd76e6`](https://github.com/maicol07/flarum-ext-sso/commit/fcd76e6dd1bdc7fbeb0617dbcae781b12378c8d5) Added flarum version support badge
- [`5de2a76`](https://github.com/maicol07/flarum-ext-sso/commit/5de2a76cdbb8a2c85c36bd431e50183fda94d13a) **deps:** Moved JWT package to suggestions
- [`7a4ce8c`](https://github.com/maicol07/flarum-ext-sso/commit/7a4ce8c3fd2aa157fe4ea33748f8b359b0dec2b9) **locale:** Delete pl.yml ([#11](https://github.com/maicol07/flarum-ext-sso/issues/11))


<a name="1.10"></a>
## [1.10](https://github.com/maicol07/flarum-ext-sso/compare/1.9...1.10)

> Released on May 22, 2021

### ✨ Features
- [`5e58a02`](https://github.com/maicol07/flarum-ext-sso/commit/5e58a02a9c7d0d06433c730c8e13ec3672b8e5f3) ✨ Compatibility with Flarum 1.0
- [`eda72a0`](https://github.com/maicol07/flarum-ext-sso/commit/eda72a07455daf67a29c3b5b821db9ecff9f3e6c) ✨ Initial compatibility with Flarum 1.0
- [`5485b84`](https://github.com/maicol07/flarum-ext-sso/commit/5485b84fd2cdccb1ac5e892bf82e036d82d5cf39) ✨ Initial compatibility with Flarum 1.0

### 👷 Building scripts changes
- [`17e5cdc`](https://github.com/maicol07/flarum-ext-sso/commit/17e5cdce3311beee0cac6819e930ad5318665745) **changelog:** Added types to changelog generation
- [`987e9f1`](https://github.com/maicol07/flarum-ext-sso/commit/987e9f18802191f30cffc15f6a8bb9191fb569b9) **changelog:** 💚 Fixed changelog generation

### 👷 CI changes
- [`e326ffb`](https://github.com/maicol07/flarum-ext-sso/commit/e326ffb0a279b26854a05f2bd170f4a37ad2671d) **build:** 👷 Added CHANGELOG action

### Other changes
- [`64827c9`](https://github.com/maicol07/flarum-ext-sso/commit/64827c9443ef172ca026c40d54dcfe9a173144be) **deps:** 📌 Pinned jwt library to ^4 due to PHP requirement

### ⏪ Reverts

- [`977b1fe`](https://github.com/maicol07/flarum-ext-sso/commit/977b1fe3196ac11f155f1d47b87df941087a05ce) chore(deps): 📌 Pinned jwt library to ^4 due to PHP requirement

    This reverts commit 64827c94. PHP requirement is >= 7.3. PHP 7.3 is not supported by JWT v4


<a name="1.9"></a>
## [1.9](https://github.com/maicol07/flarum-ext-sso/compare/1.8.1...1.9)

> Released on April 09, 2021

### ✨ Features
- [`6c802df`](https://github.com/maicol07/flarum-ext-sso/commit/6c802dff583aa417dc009da4473a6df52b626459) ✨ Allow updating user avatar via `avatarUrl` attribute
- [`bc56ed3`](https://github.com/maicol07/flarum-ext-sso/commit/bc56ed373661a9512b2aba278e0d38feabb4f0d0) ✨ New Login middleware
- [`3e033f8`](https://github.com/maicol07/flarum-ext-sso/commit/3e033f8c8d1969152da8250ddcd900b552e76c2d) ✨ Initial compatibility with beta16

### 🔄 Updates
- [`27b284e`](https://github.com/maicol07/flarum-ext-sso/commit/27b284eb0e6562906757c45ee71d3ee115627bc4) 💥 Updated JWT SSO to beta16

    Major changes:
    - 💥 Signer key must be plain text now. It will be encoded to base64 automatically
    - 💥 Login is no longer done with the login method (which is now named getToken) but will rely on the new middleware

### ⚡ Performance Improvements
- [`3cf884f`](https://github.com/maicol07/flarum-ext-sso/commit/3cf884fe7a8b060cba274f46612287415aa1f4c8) ⚡ Improved subscribers and listeners handling

### 🐛 Bug Fixes
- [`830def6`](https://github.com/maicol07/flarum-ext-sso/commit/830def6f9e6da958cc3bc82e3e3ebfee742c7ff7) 🐛 Exception when updating user and `avatarUrl` is `null`
- [`978e1de`](https://github.com/maicol07/flarum-ext-sso/commit/978e1de28786a2219ec1c6f4b1396d41d31530ea) 🐛 Fixed issue with the Laravel Cookie helper

### 👷 Building scripts changes
- [`da6515b`](https://github.com/maicol07/flarum-ext-sso/commit/da6515bdc70ebce4eacc7ebcaf7bcec1fa70fbd0) 💚 Fixed changelog generation
- [`563336b`](https://github.com/maicol07/flarum-ext-sso/commit/563336ba2b8980efee4a60c19dc28540b4bb46b4) 👷 Added CHANGELOG
- [`5ec3529`](https://github.com/maicol07/flarum-ext-sso/commit/5ec3529006686d44caae8a2b84bb0ca53d45a328) 📦 Missing bundled JS
- [`9745f9f`](https://github.com/maicol07/flarum-ext-sso/commit/9745f9f88bef061ab2dbbecb348942f99d1a87ca) **changelog:** 👷 Improved changelog

### Other changes
- [`e0df539`](https://github.com/maicol07/flarum-ext-sso/commit/e0df5393aed028d510bb0fbacc0696b6f17e8b87) Updated composer.json metadata
- [`9ea9834`](https://github.com/maicol07/flarum-ext-sso/commit/9ea9834602a5497e109c6dc4e24cdd6799099eaa) **release:** 🔖 1.9 final changelog


<a name="1.8.1"></a>
## [1.8.1](https://github.com/maicol07/flarum-ext-sso/compare/1.8...1.8.1)

> Released on January 24, 2021

### ✨ Features
- [`650e369`](https://github.com/maicol07/flarum-ext-sso/commit/650e369567f18dbd156b6db305be9d37d0b36027) Default signing algorithm to Sha256
- [`5b75af1`](https://github.com/maicol07/flarum-ext-sso/commit/5b75af17d7a14fd15970dc0e7227e5e2ac77e0ad) Allow selecting signing algorithm

    - Support changes introduced in JWT Addon v1.1

### 🐛 Bug Fixes
- [`d1bc12c`](https://github.com/maicol07/flarum-ext-sso/commit/d1bc12c2bb9bfa85d38159a1baf8f9957c66cdac) js/package.json to reduce vulnerabilities

    The following vulnerabilities are fixed with an upgrade:
    - https://snyk.io/vuln/SNYK-JS-Y18N-1021887

### 🔀 Pull Requests

- [`6aa1a9a`](https://github.com/maicol07/flarum-ext-sso/commit/6aa1a9a8196444bba0073e43cdb9e364acbe0e1d) Merge pull request [#6](https://github.com/maicol07/flarum-ext-sso/issues/6) from maicol07/snyk-fix-8ac6c5f6423389c2f10deda46add1e6a


<a name="1.8"></a>
## [1.8](https://github.com/maicol07/flarum-ext-sso/compare/1.7...1.8)

> Released on December 23, 2020

### ✨ Features
- [`8303d8d`](https://github.com/maicol07/flarum-ext-sso/commit/8303d8d51fc0a034718f42c5aa93bdeec29e21f2) 🎉 Added manage account URL setting
- [`2b670d3`](https://github.com/maicol07/flarum-ext-sso/commit/2b670d389906440d6f4f6f5844e9283f5f04a885) 💄 New settings page!

    - Revamped settings page UI
    - Added metadata to composer.json
    - Removed fof/components as no longer used

### 🐛 Bug Fixes
- [`d567d5d`](https://github.com/maicol07/flarum-ext-sso/commit/d567d5db40e682dfae1f1dd2ba2aaa3d7164a1a0) Login modal not showing when extension is enabled but no login url is set
- [`62bd85f`](https://github.com/maicol07/flarum-ext-sso/commit/62bd85f5d5877867b67c6ef827e49ede70f91d23) 📦 Updated compiled files for the previous fix
- [`62f0ea5`](https://github.com/maicol07/flarum-ext-sso/commit/62f0ea585dc06e4c9b4c65c84f42ac4b56007590) Extending oninit hook and fixing modal redirection

### ⏪ Reverted
- [`9afa943`](https://github.com/maicol07/flarum-ext-sso/commit/9afa943971329f6c9111931475f0129d91b0632d) ⏪ Reverted slugs

    - Changed slugs for disable login and signup button to remove

### 👷 Building scripts changes
- [`8e84fad`](https://github.com/maicol07/flarum-ext-sso/commit/8e84fad5f827e8f60dcbbf1df87c0ac0e671dd5b) Added a new build-dev script

    - Upgraded dependencies

### Other changes
- [`d6cbab3`](https://github.com/maicol07/flarum-ext-sso/commit/d6cbab34c236088a6cc5f9256b1024691dd4233c) Changed settings slugs

### 🔀 Pull Requests

- [`9e074ce`](https://github.com/maicol07/flarum-ext-sso/commit/9e074cebd03195008122be54aeb920116861dcd5) Merge pull request [#7](https://github.com/maicol07/flarum-ext-sso/issues/7) from pedrorezende/master

    fix: Extending oninit hook and fixing modal redirection


<a name="1.7"></a>
## [1.7](https://github.com/maicol07/flarum-ext-sso/compare/1.6...1.7)

> Released on November 02, 2020

### ✨ Features
- [`a72ee71`](https://github.com/maicol07/flarum-ext-sso/commit/a72ee7138b0cdfc16389b0c5d1519fbda2e381ff) ✨ JWT Validation and login (#FSSOE-15)

    - Currently supports validation, login and signup
    Tracker feature: https://tracker.maicol07.it/issue/FSSOE-15

### 🐛 Bug Fixes
- [`da8d2d3`](https://github.com/maicol07/flarum-ext-sso/commit/da8d2d310b55ac1d5eb0f2ff201bb37f63f4ecce) Namespaces not added to composer.json
- [`2962c40`](https://github.com/maicol07/flarum-ext-sso/commit/2962c40cc8be81ab6dcd888e37bbb9fb03e93740) change query param

    Due to changes in previous commit
- [`3653ad4`](https://github.com/maicol07/flarum-ext-sso/commit/3653ad425af2daf2d95861e9ed9d2c30b6c35b19) Exception when logging out from Flarum
- [`8f1738d`](https://github.com/maicol07/flarum-ext-sso/commit/8f1738d0a1b5791bafc297f9051e4707b716c7ae) Exceptions
- [`1ea3d15`](https://github.com/maicol07/flarum-ext-sso/commit/1ea3d15456e643f893cda609df2e6195f8352143) 🐛 Fix logout (#FSSOE-1)

### ♻ Code Refactoring
- [`1e67cdc`](https://github.com/maicol07/flarum-ext-sso/commit/1e67cdc6b205408182603f4ec4831d98fb4e2533) ♻️ Refactor code
- [`15b4c7b`](https://github.com/maicol07/flarum-ext-sso/commit/15b4c7bb4d1a57b926c147393eef427ae8233824) ♻️ ESLint Refactor
- [`53a83e0`](https://github.com/maicol07/flarum-ext-sso/commit/53a83e0e34994522ca613c6d3b7ade6cb4806925) ♻️ 🎨 Refactored code

    - Following PHP CS Fixer
    - Fixed not using spaces
- [`4bf937a`](https://github.com/maicol07/flarum-ext-sso/commit/4bf937a5c1d30239664ca750102eca5f3ab74e15) ♻️ 🎨 Refactored code

    - Following PHP CS Fixer
    - PHP 7.2 requirement added
- [`09a810f`](https://github.com/maicol07/flarum-ext-sso/commit/09a810f6ce403907929a2c826b7e20f86ca22d1a) :fire: Removed links to the sample-website folder

### 🎨 Code styling
- [`1693bba`](https://github.com/maicol07/flarum-ext-sso/commit/1693bba998db2e3b78f55cb58b3a21fcb81ddbb9) **code:** Added Mithril JSX Key eslint rule

### Other changes
- [`5d6859b`](https://github.com/maicol07/flarum-ext-sso/commit/5d6859bb45595e3f31b1241f35981a6d583a626a) Fixed links to docs
- [`e04659a`](https://github.com/maicol07/flarum-ext-sso/commit/e04659a73fca2873fe4c2b1be8d460cb803091ac) PHP Backend - Removed deprecated methods
- [`429f8b2`](https://github.com/maicol07/flarum-ext-sso/commit/429f8b221f5572e65d95086ba5b9f78bc51d22e0) JS Backend - Compatibility with Beta 14
- [`148a845`](https://github.com/maicol07/flarum-ext-sso/commit/148a845adad414530ddc7be77a64cecbd34d6330) JS Frontend - Compatibility with beta 14
- [`18f7c04`](https://github.com/maicol07/flarum-ext-sso/commit/18f7c0416974d4f3e1252aa888fcaa673a29d7d2) 🚚 Renamed ForumFrontend middleware to LogoutMiddleware
- [`1c83b9f`](https://github.com/maicol07/flarum-ext-sso/commit/1c83b9fc753b050d51cb714f2bbf883c6a6cd3d4) Compatibility with Beta 14 (Part 1)

    DO NOT USE THIS IN PRODUCTION!!! COMPATIBILITY WITH BETA 14 HAS NOT BEEN TESTED YET!
- [`a2d7436`](https://github.com/maicol07/flarum-ext-sso/commit/a2d7436f80f087afd79474452e09754080db5539) JWT Token as Bearer Token
- [`af21cb3`](https://github.com/maicol07/flarum-ext-sso/commit/af21cb335ace2da48c3231dae9001182d2409005) 🙈 Updated .gitignore
- [`c57cd9c`](https://github.com/maicol07/flarum-ext-sso/commit/c57cd9c6e516398580f38f2da8ac03f7b6375d40) 🙈 Updated .gitignore
- [`f5d9bcb`](https://github.com/maicol07/flarum-ext-sso/commit/f5d9bcb9db0e61a5241fa20f73afa8d87fe9863b) 🙈 Updated .gitignore

### 🔀 Pull Requests

- [`e0412f5`](https://github.com/maicol07/flarum-ext-sso/commit/e0412f5653bfbfabc2e8659bf1cd69792f5a1dea) Merge pull request [#3](https://github.com/maicol07/flarum-ext-sso/issues/3) from maicol07/renovate/configure


<a name="1.6"></a>
## [1.6](https://github.com/maicol07/flarum-ext-sso/compare/1.5...1.6)

> Released on May 13, 2020

### ✨ Features
- [`5a2b8e8`](https://github.com/maicol07/flarum-ext-sso/commit/5a2b8e89f2adc8dcba28c8fa278443e1d20ebdf2) Disable setting groups to admins
- [`925b83d`](https://github.com/maicol07/flarum-ext-sso/commit/925b83d04bf4d895364872ecbaf331ce72dcb0ef) Password reset

    Includes general code style reformat and some  fixes for the pro login feature
- [`9b26adb`](https://github.com/maicol07/flarum-ext-sso/commit/9b26adbba831f6f86ccba6102eb04f645368c055) Groups setting on signup, update user

    Includes a general code style refactor and some fixes for the setGroup features

### ⚡ Performance Improvements
- [`72492b4`](https://github.com/maicol07/flarum-ext-sso/commit/72492b4b1627b1344292ada4bf24e13c065ed1fd) Optimized login times

### 🐛 Bug Fixes
- [`db972f0`](https://github.com/maicol07/flarum-ext-sso/commit/db972f08aaed076c89eedb1921722f7aad25f884) Groups were not deleted from user
- [`9e75738`](https://github.com/maicol07/flarum-ext-sso/commit/9e757385b52215fd3f60f9b6eddb2496c541ae0e) Removing PRO key don't deactivate PRO features
- [`e7d0e89`](https://github.com/maicol07/flarum-ext-sso/commit/e7d0e8971313e22072ebbde8638a98f981cd7168) User can't login if it's not an admin
- [`f8d187f`](https://github.com/maicol07/flarum-ext-sso/commit/f8d187f60aaed25a40047ff07324aa657948f75a) Added missing class of previous commit
- [`83631f3`](https://github.com/maicol07/flarum-ext-sso/commit/83631f3b5ddccb7743a49dffa88fe00fdbd4b51a) User can't login if his id > 20

    * Better getUserList method. Now is public
    * Changed full parameter to filter (see API doc)
- [`796224f`](https://github.com/maicol07/flarum-ext-sso/commit/796224f84a0475b8cc92b01821a7868e42fab74c) #FSSOE-1
- [`1949cc3`](https://github.com/maicol07/flarum-ext-sso/commit/1949cc3b9e4320c2d95b3cd122390800c63b2831) Fixed not_authenticated error

### ♻ Code Refactoring
- [`f7d2547`](https://github.com/maicol07/flarum-ext-sso/commit/f7d25475ef6c19eed7f1678e3ebb2725804762d9) :recycle: Deleted unused file

### 🎨 Code styling
- [`83cbd1e`](https://github.com/maicol07/flarum-ext-sso/commit/83cbd1e7b23e562a88cba0a4958d2c0928cd39f1) Rearranged code

### Other changes
- [`29dfe1f`](https://github.com/maicol07/flarum-ext-sso/commit/29dfe1f0e5a232d5726db79227ced7e5102d2d37) :pushpin: Updated Flarum version
- [`278802c`](https://github.com/maicol07/flarum-ext-sso/commit/278802cbebc10043eff758716cbcdcb857ba285a) Silenced error on login form
- [`9cf664d`](https://github.com/maicol07/flarum-ext-sso/commit/9cf664d0ad1315544f64b05f7abd64655ac981fc) Slug rename

    Plugin slug has been renamed to sso-flarum.
    Naming conventions from now on:
    - Files: prefix-flarum-sso-suffix.ext
    - Options names, ids or function names: prefix_flarum_sso_plugin_suffix
    - Slugs, text domain and other slug-related strings: sso-flarum with eventually a prefix, suffix or extension


<a name="1.5"></a>
## [1.5](https://github.com/maicol07/flarum-ext-sso/compare/1.4.6...1.5)

> Released on April 08, 2020

### ✨ Features
- [`a35a3c6`](https://github.com/maicol07/flarum-ext-sso/commit/a35a3c6b181d6e69a4cbddaf3e45a94406f62c53) Addded insecure mode and groups setting

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
- [`a680c9d`](https://github.com/maicol07/flarum-ext-sso/commit/a680c9d7c1f74476d565b55cd2019fabd88ef6d3) Removed json extension requirement
- [`d7ca1d1`](https://github.com/maicol07/flarum-ext-sso/commit/d7ca1d12aa8ddf4afe2b3415aae45083187ff4dd) New WordPress plugin


<a name="1.4.6"></a>
## [1.4.6](https://github.com/maicol07/flarum-ext-sso/compare/1.4.5...1.4.6)

> Released on March 09, 2020

### Other changes
- [`59be4e6`](https://github.com/maicol07/flarum-ext-sso/commit/59be4e6efdc954a16faed2bddc97a65fa6421131) Allow installations on beta12


<a name="1.4.5"></a>
## [1.4.5](https://github.com/maicol07/flarum-ext-sso/compare/1.4.4...1.4.5)

> Released on February 06, 2020

### 🐛 Bug Fixes
- [`dc1345d`](https://github.com/maicol07/flarum-ext-sso/commit/dc1345d13a42125afcc13976fd1e10f62ffc3963) Missing import of AddFofComponents

    Signed-off-by: Maicol <maicolbattistini[@live](https://github.com/live).it>


<a name="1.4.4"></a>
## [1.4.4](https://github.com/maicol07/flarum-ext-sso/compare/1.4.3...1.4.4)

> Released on February 05, 2020

### 🐛 Bug Fixes
- [`890b15b`](https://github.com/maicol07/flarum-ext-sso/commit/890b15b3d29d81fbf5ea0b07eb7f7e88ceef0859) **admin:** Settings modal couldn't be opened

    Signed-off-by: Maicol <maicolbattistini[@live](https://github.com/live).it>


<a name="1.4.3"></a>
## [1.4.3](https://github.com/maicol07/flarum-ext-sso/compare/1.4.1...1.4.3)

> Released on January 20, 2020


<a name="1.4.1"></a>
## [1.4.1](https://github.com/maicol07/flarum-ext-sso/compare/1.4.2...1.4.1)

> Released on January 05, 2020


<a name="1.4.2"></a>
## [1.4.2](https://github.com/maicol07/flarum-ext-sso/compare/1.4.0...1.4.2)

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

- [`0bcbe5c`](https://github.com/maicol07/flarum-ext-sso/commit/0bcbe5c0cfa847c4bbefea7fae6fde9d52734415) Merge pull request [#12](https://github.com/maicol07/flarum-ext-sso/issues/12) from sampoyigi/master

    Update to v0.1.0-beta.8.1
- [`d3270ba`](https://github.com/maicol07/flarum-ext-sso/commit/d3270ba51cd7e9b021d140cd540fa857797812eb) Merge pull request [#10](https://github.com/maicol07/flarum-ext-sso/issues/10) from glombers/patch-1

    Create pl.yml


<a name="v1.1.2"></a>
## [v1.1.2](https://github.com/maicol07/flarum-ext-sso/compare/v1.1.1...v1.1.2)

> Released on August 10, 2017

### 🔀 Pull Requests

- [`cb48499`](https://github.com/maicol07/flarum-ext-sso/commit/cb484991a1c62fbf890f0e86c8e3cbb98845b3a4) Merge pull request [#2](https://github.com/maicol07/flarum-ext-sso/issues/2) from zinsserzh/cleanSettings

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
