(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Combo", [], factory);
	else if(typeof exports === 'object')
		exports["Combo"] = factory();
	else
		root["Combo"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/combo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/combo.js":
/*!**********************!*\
  !*** ./src/combo.js ***!
  \**********************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/component.js */ \"./src/modules/component.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return _modules_component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack://Combo/./src/combo.js?");

/***/ }),

/***/ "./src/modules/component.js":
/*!**********************************!*\
  !*** ./src/modules/component.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Component; });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/modules/utils.js\");\n\n\n/**\n * Represents a mounted component or a view.\n *\n * @example\n *\n * const Example = new class extends Combo.Component {\n *     render() {\n *         return `\n *             <div>Hello World</div>\n *         `;\n *     }\n * }();\n *\n * Example.mount(document.getElementById(\"root\"));\n */\nclass Component {\n\tconstructor() {\n\t\t/**\n   * Returns an object that contains the component data.\n   *\n   * @returns {object} The data.\n   *\n   * @example\n   *\n   * const Example = new class extends Combo.Component {\n   *     created() {\n   *         this.data = {\n   *             name: \"World\"\n   *         }\n   *     }\n   *     render() {\n   *         return `\n   *             <div>Hello ${this.data.name}</div>\n   *         `;\n   *     }\n   * }();\n   *\n   * Example.mount(document.getElementById(\"root\"));\n   */\n\t\tthis.data = {};\n\n\t\t/**\n   * Returns an object that contains the component props.\n   *\n   * @returns {object} The props.\n   *\n   * @example\n   *\n   * const Example = new class extends Combo.Component {\n   *     render() {\n   *         return `\n   *             <div>Hello ${this.props.name}</div>\n   *         `;\n   *     }\n   * }();\n   *\n   * Example.mount(document.getElementById(\"root\"), {\n   *     name: \"World\"\n   * });\n   */\n\t\tthis.props = {};\n\n\t\t/**\n   * Returns the element the component is mounted to.\n   *\n   * @returns {object} The element.\n   *\n   * @example\n   *\n   * const Example = new class extends Combo.Component {\n   *     render() {\n   *         return `\n   *             <div>Hello ${this.el.dataset.name}</div>\n   *         `;\n   *     }\n   * }();\n   *\n   * Example.mount(document.getElementById(\"root\"));\n   */\n\t\tthis.el = undefined;\n\n\t\t//\n\t\t// Invoke the created lifecycle hook.\n\t\t//\n\t\tthis.created();\n\t}\n\n\t/**\n  * Mount the component to a container element.\n  *\n  * @param {object} el The element.\n  * @param {object} [props={}] The props.\n  *\n  * @example\n  *\n  * const Example = new class extends Combo.Component {\n  *     mounted() {\n  *         console.log(\"The component was mounted.\")\n  *     }\n  * }();\n  *\n  * Example.mount(document.getElementById(\"root\"));\n  */\n\tmount(el, props = {}) {\n\t\t//\n\t\t// Invoke the mounting lifecycle hook.\n\t\t//\n\t\tthis.mounting();\n\n\t\t//\n\t\t// Copy el to this.el.\n\t\t//\n\t\tthis.el = el;\n\n\t\t//\n\t\t// Handle the props.\n\t\t//\n\t\tif (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"_isObjectEmpty\"])(props)) {\n\t\t\t//\n\t\t\t// Invoke the receiving lifecycle hook.\n\t\t\t//\n\t\t\tthis.receiving(props);\n\n\t\t\t//\n\t\t\t// Copy props to this.props.\n\t\t\t//\n\t\t\tthis.props = Object.assign({}, this.props, props);\n\t\t}\n\n\t\t//\n\t\t// Render the component.\n\t\t//\n\t\tObject(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"_replaceHTML\"])(this.el, this.render());\n\n\t\t//\n\t\t// Invoke the mounted lifecycle hook.\n\t\t//\n\t\tthis.mounted();\n\t}\n\n\t/**\n  * Unmount the component from its container element.\n  *\n  * @param {boolean} [remove=false] Remove the rendered output.\n  *\n  * @example\n  *\n  * const Example = new class extends Combo.Component {\n  *     mounted() {\n  *         this.unmount();\n  *     }\n  *     unmounted() {\n  *         console.log(\"The component was unmounted.\")\n  *     }\n  * }();\n  *\n  * Example.mount(document.getElementById(\"root\"));\n  */\n\tunmount(remove = true) {\n\t\t//\n\t\t// Invoke the unmounting lifecycle hook.\n\t\t//\n\t\tthis.unmounting();\n\n\t\t//\n\t\t// Remove the rendered output on the page.\n\t\t//\n\t\tif (remove === true) {\n\t\t\tObject(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"_removeHTML\"])(this.el);\n\t\t}\n\n\t\t//\n\t\t// Delete the assignment to the element.\n\t\t//\n\t\tthis.el = undefined;\n\n\t\t//\n\t\t// Invoke the unmounted lifecycle hook.\n\t\t//\n\t\tthis.unmounted();\n\t}\n\n\t/**\n  * Update a mounted component then re-render it.\n  *\n  * @param {Object} [values={}] The values.\n  *\n  * @example\n  *\n  * const Example = new class extends Combo.Component {\n  *     created() {\n  *         this.update({});\n  *     }\n  *     updated() {\n  *         console.log(\"The component was updated.\")\n  *     }\n  * }();\n  *\n  * Example.mount(document.getElementById(\"root\"));\n  */\n\tupdate(data = {}) {\n\t\tvar prev = this.data;\n\n\t\t//\n\t\t// Invoke the updating lifecycle hook.\n\t\t//\n\t\tthis.updating(prev);\n\t\t//\n\t\t// Copy data to this.data.\n\t\t//\n\t\tthis.data = Object.assign({}, this.data, data);\n\n\t\t//\n\t\t// Invoke the updated lifecycle hook.\n\t\t//\n\t\tthis.updated(prev);\n\n\t\t//\n\t\t// Re-render the component.\n\t\t//\n\t\tthis.refresh();\n\t}\n\n\t/**\n  * Force a mounted component to re-render itself.\n  *\n  * @returns {string} The rendered output.\n  *\n  * @example\n  *\n  * const Example = new class extends Combo.Component {\n  *     render() {\n  *         return `\n  *             <div>Hello World</div>\n  *         `;\n  *     }\n  * }();\n  *\n  * Example.mount(document.getElementById(\"root\"));\n  */\n\trefresh() {\n\t\tthis.mount(this.el);\n\t}\n\n\t/**\n  * Add an event listener to one or more child elements.\n  *\n  * @param {string} [selector] The selector string.\n  * @param {string} [event] The event.\n  * @param {function} [cb] The callback function.\n  *\n  * @example\n  *\n  * const Example = new class extends Combo.Component {\n  *     created() {\n  *         this.data = {\n  *             field1: \"\",\n  *             field2: \"\",\n  *             field3: \"\"\n  *         };\n  *     }\n  *     mounted() {\n  *         this.on(\"[type='text']\", \"change\", (e) => {\n  *             this.update({\n  *                 [e.target.name]: e.target.value\n  *             });\n  *         });\n  *     }\n  *\n  *     render() {\n  *         return `\n  *             <input name=\"field1\" type=\"text\" value=\"${this.data.field1}\">\n  *             <input name=\"field2\" type=\"text\" value=\"${this.data.field2}\">\n  *             <input name=\"field3\" type=\"text\" value=\"${this.data.field3}\">\n  *\n  *             <p>${JSON.stringify(this.data)}</p>\n  *         `;\n  *     }\n  * }();\n  *\n  * Example.mount(document.getElementById(\"root\"));\n  */\n\ton(selector, event, cb) {\n\t\tvar els = this.el.querySelectorAll(selector);\n\n\t\tfor (var index = 0, length = els.length; index < length; index++) {\n\t\t\tels[index].addEventListener(event, e => cb(e));\n\t\t}\n\t}\n\n\t/**\n  * Returns a boolean value determining if the component is mounted.\n  *\n  * @returns {boolean} True if mounted.\n  *\n  * @example\n  *\n  * const Example = new class extends Combo.Component {\n  *     render() {\n  *         return `\n  *             <div>Hello ${this.isMounted}</div>\n  *         `;\n  *     }\n  * }();\n  *\n  * Example.mount(document.getElementById(\"root\"));\n  */\n\tget isMounted() {\n\t\treturn !!this.el;\n\t}\n\n\t/**\n  * Invoked after the component was created.\n  *\n  * @example\n  *\n  * const Example = new class extends Combo.Component {\n  *     created() {\n  *         console.log(\"The component was created.\")\n  *     }\n  * }();\n  *\n  * Example.mount(document.getElementById(\"root\"));\n  */\n\tcreated() {}\n\n\t/**\n  * Invoked before the component is updated.\n  *\n  * @param {object} prev The previous data.\n  *\n  * @example\n  *\n  * const Example = new class extends Combo.Component {\n  *     created() {\n  *         this.update({});\n  *     }\n  *     updating() {\n  *         console.log(\"The component will update.\")\n  *     }\n  * }();\n  *\n  * Example.mount(document.getElementById(\"root\"));\n  */\n\tupdating() {}\n\n\t/**\n  * Invoked after the component was updated.\n  *\n  * @param {object} prev The previous data.\n  *\n  * @example\n  *\n  * const Example = new class extends Combo.Component {\n  *     created() {\n  *         this.update({});\n  *     }\n  *     updated() {\n  *         console.log(\"The component was updated.\")\n  *     }\n  * }();\n  *\n  * Example.mount(document.getElementById(\"root\"));\n  */\n\tupdated() {}\n\n\t/**\n  * Invoked before the component is mounted.\n  *\n  * @example\n  *\n  * const Example = new class extends Combo.Component {\n  *     mounting() {\n  *         console.log(\"The component will mount.\")\n  *     }\n  * }();\n  *\n  * Example.mount(document.getElementById(\"root\"));\n  */\n\tmounting() {}\n\n\t/**\n  * Invoked after the component was mounted.\n  *\n  * @example\n  *\n  * const Example = new class extends Combo.Component {\n  *     mounted() {\n  *         console.log(\"The component was mounted.\")\n  *     }\n  * }();\n  *\n  * Example.mount(document.getElementById(\"root\"));\n  */\n\tmounted() {}\n\n\t/**\n  * Invoked before the component is unmounted.\n  *\n  * @example\n  *\n  * const Example = new class extends Combo.Component {\n  *     mounted() {\n  *         this.unmount();\n  *     }\n  *     unmounting() {\n  *         console.log(\"The component will unmount.\")\n  *     }\n  * }();\n  *\n  * Example.mount(document.getElementById(\"root\"));\n  */\n\tunmounting() {}\n\n\t/**\n  * Invoked after the component was unmounted.\n  *\n  * @example\n  *\n  * const Example = new class extends Combo.Component {\n  *     mounted() {\n  *         this.unmount();\n  *     }\n  *     unmounted() {\n  *         console.log(\"The component was unmounted.\")\n  *     }\n  * }();\n  *\n  * Example.mount(document.getElementById(\"root\"));\n  */\n\tunmounted() {}\n\n\t/**\n  * Invoked before the component receives props.\n  *\n  * @example\n  *\n  * const Example = new class extends Combo.Component {\n  *     receiving() {\n  *         console.log(\"The component will receive props.\")\n  *     }\n  * }();\n  *\n  * Example.mount(document.getElementById(\"root\"), {\n  *     name: \"Combo\"\n  * });\n  */\n\treceiving() {}\n\n\t/**\n  * Invoked when the component is mounted, updated, or refreshed.\n  *\n  * @returns {string} The rendered output.\n  *\n  * @example\n  *\n  * const Example = new class extends Combo.Component {\n  *     render() {\n  *         return `\n  *             <div>Hello World</div>\n  *         `;\n  *     }\n  * }();\n  *\n  * Example.mount(document.getElementById(\"root\"));\n  */\n\trender() {\n\t\treturn \"\";\n\t}\n};\n\n//# sourceURL=webpack://Combo/./src/modules/component.js?");

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/*! exports provided: _isObjectEmpty, _removeHTML, _replaceHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_isObjectEmpty\", function() { return _isObjectEmpty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_removeHTML\", function() { return _removeHTML; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_replaceHTML\", function() { return _replaceHTML; });\n/**\n * Determine if an object contains any properties.\n *\n * @private\n * @returns {boolean} True if empty\n *\n * @example\n *\n * console.log(isObjectEmpty({}));\n */\n\nfunction _isObjectEmpty(props) {\n  return Object.keys(props).length === 0 && props.constructor === Object;\n}\n\n/**\n * Removes the innerHTML of an element.\n *\n * @private\n * @param {Element} el The element.\n *\n * @example\n *\n * _removeHTML(document.getElementById(\"root\"));\n *\n */\nfunction _removeHTML(el) {\n  if (typeof el.firstChild !== \"undefined\") {\n    while (el.firstChild) {\n      el.removeChild(el.firstChild);\n    }\n  }\n}\n\n/**\n * Replaces the innerHTML of an element.\n *\n * @private\n * @param {Element} el The element.\n * @param {string} html The HTML.\n * @param {boolean} append Reserved for possible future use.\n *\n * @example\n *\n * _removeHTML(document.getElementById(\"root\"));\n *\n */\nfunction _replaceHTML(el, html, append = false) {\n  if (append == false) {\n    _removeHTML(el);\n  }\n\n  el.insertAdjacentHTML(\"beforeEnd\", html);\n}\n\n//# sourceURL=webpack://Combo/./src/modules/utils.js?");

/***/ })

/******/ });
});