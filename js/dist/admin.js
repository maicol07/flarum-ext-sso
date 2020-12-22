module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");


/***/ }),

/***/ "./src/admin/components/SSOSettingsModal.js":
/*!**************************************************!*\
  !*** ./src/admin/components/SSOSettingsModal.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _fof_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fof-components */ "@fof-components");
/* harmony import */ var _fof_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fof_components__WEBPACK_IMPORTED_MODULE_0__);

var SettingsModal = _fof_components__WEBPACK_IMPORTED_MODULE_0__.settings.SettingsModal,
    _settings$items = _fof_components__WEBPACK_IMPORTED_MODULE_0__.settings.items,
    StringItem = _settings$items.StringItem,
    BooleanItem = _settings$items.BooleanItem;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  // noinspection JSUnusedGlobalSymbols
  app.extensionSettings['maicol07-sso'] = function () {
    return app.modal.show(SettingsModal, {
      title: app.translator.trans('maicol07.sso.admin.settings.title'),
      size: 'small',
      items: function items(e) {
        return [m(StringItem, {
          setting: e,
          name: "maicol07.sso.signup_url"
        }, app.translator.trans('maicol07.sso.admin.settings.signup_url')), m(StringItem, {
          setting: e,
          name: "maicol07.sso.login_url"
        }, app.translator.trans('maicol07.sso.admin.settings.login_url')), m(StringItem, {
          setting: e,
          name: "maicol07.sso.logout_url"
        }, app.translator.trans('maicol07.sso.admin.settings.logout_url')), m(BooleanItem, {
          setting: e,
          name: "maicol07.sso.disable_login_btn"
        }, app.translator.trans('maicol07.sso.admin.settings.disable_login_btn')), m(BooleanItem, {
          setting: e,
          name: "maicol07.sso.disable_signup_btn"
        }, app.translator.trans('maicol07.sso.admin.settings.disable_signup_btn')), m(StringItem, {
          setting: e,
          name: "maicol07.sso.jwt_iss"
        }, app.translator.trans('maicol07.sso.admin.settings.jwt_iss')), m(StringItem, {
          setting: e,
          name: "maicol07.sso.jwt_signer_key"
        }, app.translator.trans('maicol07.sso.admin.settings.jwt_signer_key'))];
      }
    });
  };
});

/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SSOSettingsModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SSOSettingsModal */ "./src/admin/components/SSOSettingsModal.js");
// noinspection NpmUsedModulesInstalled

 // noinspection JSUnresolvedVariable

flarum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('maicol07-sso', function () {
  (0,_components_SSOSettingsModal__WEBPACK_IMPORTED_MODULE_1__.default)();
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/***/ ((module) => {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "@fof-components":
/*!******************************************************!*\
  !*** external "flarum.extensions['fof-components']" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = flarum.extensions['fof-components'];

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
/******/ 	return __webpack_require__("./admin.js");
/******/ })()
;
//# sourceMappingURL=admin.js.map