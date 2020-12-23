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

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);

flarum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('maicol07.sso', function (app) {
  app.extensionData["for"]('maicol07-sso').registerSetting({
    setting: 'maicol07.sso.signup_url',
    label: app.translator.trans('maicol07.sso.admin.settings.signup_url'),
    type: 'url'
  }).registerSetting({
    setting: 'maicol07.sso.login_url',
    label: app.translator.trans('maicol07.sso.admin.settings.login_url'),
    type: 'url'
  }).registerSetting({
    setting: 'maicol07.sso.logout_url',
    label: app.translator.trans('maicol07.sso.admin.settings.logout_url'),
    type: 'url'
  }).registerSetting({
    setting: 'maicol07.sso.manage_account_url',
    label: app.translator.trans('maicol07.sso.admin.settings.manage_account_url'),
    type: 'url'
  }).registerSetting({
    setting: 'maicol07.sso.manage_account_btn_open_in_new_tab',
    label: app.translator.trans('maicol07.sso.admin.settings.manage_account_btn_open_in_new_tab'),
    type: 'boolean'
  }).registerSetting({
    setting: 'maicol07.sso.disable_login_btn',
    label: app.translator.trans('maicol07.sso.admin.settings.disable_login_btn'),
    type: 'boolean'
  }).registerSetting({
    setting: 'maicol07.sso.disable_signup_btn',
    label: app.translator.trans('maicol07.sso.admin.settings.disable_signup_btn'),
    type: 'boolean'
  }).registerSetting(function () {
    return m("div", null, m("hr", null), m("h3", null, " ", app.translator.trans('maicol07.sso.admin.settings.jwt_section_subtitle'), ":"));
  }).registerSetting({
    setting: 'maicol07.sso.jwt_iss',
    label: app.translator.trans('maicol07.sso.admin.settings.jwt_iss'),
    type: 'text'
  }).registerSetting({
    setting: 'maicol07.sso.jwt_signer_key',
    label: app.translator.trans('maicol07.sso.admin.settings.jwt_signer_key'),
    type: 'text'
  });
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/***/ ((module) => {

module.exports = flarum.core.compat['app'];

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