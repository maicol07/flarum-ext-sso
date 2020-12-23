module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");


/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/HeaderSecondary */ "flarum/components/HeaderSecondary");
/* harmony import */ var flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/SettingsPage */ "flarum/components/SettingsPage");
/* harmony import */ var flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LogInModal */ "flarum/components/LogInModal");
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4__);





flarum_app__WEBPACK_IMPORTED_MODULE_1___default().initializers.add('maicol07.sso', function () {
  // Remove login button if checkbox is selected
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'items', function (items) {
    if (checkSettings('login_url')) {
      if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('maicol07.sso.disable_login_btn') === '1') {
        items.remove('logIn');
      } else {
        // Remove login button
        if (!items.has('logIn')) {
          return;
        }

        var loginUrl = flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('maicol07.sso.login_url');
        items.replace('logIn', m("a", {
          href: loginUrl,
          className: "Button Button--link"
        }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('core.forum.header.log_in_link')));
        (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.override)((flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'oninit', function () {
          window.location.href = flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('maicol07.sso.login_url');
          throw new Error('Stop execution');
        });
      }
    }

    if (checkSettings('signup_url')) {
      if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('maicol07.sso.disable_signup_btn') === '1') {
        items.remove('signUp');
      } else {
        // Replace signup button
        if (!items.has('signUp')) {
          return;
        }

        var signupUrl = flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('maicol07.sso.signup_url');
        items.replace('signUp', m("a", {
          href: signupUrl,
          className: "Button Button--link"
        }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('core.forum.header.sign_up_link')));
      }
    }
  });
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'accountItems', function (items) {
    if (!checkSettings('login_url')) {
      return;
    } // Remove change email and password buttons


    items.remove('changeEmail');
    items.remove('changePassword');

    if (!checkSettings('manage_account_url')) {
      return;
    }

    items.add('manageAccount', m("a", {
      "class": "Button",
      href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('maicol07.sso.manage_account_url'),
      target: flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('maicol07.sso.manage_account_btn_open_in_new_tab') === '1' ? '_blank' : ''
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('maicol07.sso.manage_account_btn')));
  });
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'settingsItems', function (items) {
    if (checkSettings('manage_account_url')) {
      return;
    } // Remove account section


    if (items.has('account') && items.get('account').children.length === 0) {
      items.remove('account');
    }
  });
  /**
   * Checks whether login URL is set
   *
   * @returns Boolean
   */

  function checkSettings(slug) {
    return Boolean(flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute("maicol07.sso." + slug));
  }
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/***/ ((module) => {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/HeaderSecondary":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/HeaderSecondary']" ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = flarum.core.compat['components/HeaderSecondary'];

/***/ }),

/***/ "flarum/components/LogInModal":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LogInModal']" ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = flarum.core.compat['components/LogInModal'];

/***/ }),

/***/ "flarum/components/SettingsPage":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/SettingsPage']" ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = flarum.core.compat['components/SettingsPage'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = flarum.core.compat['extend'];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./forum.js");
/******/ })()
;
//# sourceMappingURL=forum.js.map