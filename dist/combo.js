(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Combo", [], factory);
	else if(typeof exports === 'object')
		exports["Combo"] = factory();
	else
		root["Combo"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._removeHTML = _removeHTML;
exports._replaceHTML = _replaceHTML;
exports.isComponent = isComponent;
exports.isRenderable = isRenderable;
/**
 * Removes the innerHTML of an element.
 *
 * @private
 * @param {Element} el The element.
 *
 * @example
 *
 * _removeHTML(document.getElementById("root"));
 *
 */
function _removeHTML(el) {
  if (typeof el.firstChild !== "undefined") {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }
}

/**
 * Replaces the innerHTML of an element.
 *
 * @private
 * @param {Element} el The element.
 * @param {string} html The HTML.
 * @param {boolean} append Reserved for future use.
 *
 * @example
 *
 * _removeHTML(document.getElementById("root"));
 *
 */
function _replaceHTML(el, html) {
  var append = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (append == false) {
    _removeHTML(el);
  }

  el.insertAdjacentHTML("beforeEnd", html);
}

/**
 * Returns a boolean value determining if an object is a component.
 *
 * @param {Object} obj The object.
 *
 * @returns {boolean} True if `obj` is a component.
 *
 * @example
 *
 * var Message = new class extends Combo.Component {
 *     render() {
 *         return `
 *             <p>Hello ${this.data.name}</p>
 *         `;
 *     }
 * }();
 *
 * console.log(Combo.isComponent(Message)); // "true"
 */
function isComponent(obj) {
  return typeof obj.mount === "function";
}

/**
 * Returns a boolean value determining if a component is renderable.
 *
 * @param {Object} com The component.
 *
 * @returns {boolean} True if `com` is renderable.
 *
 * @example
 *
 * var Message = new class extends Combo.Component {
 *     render() {
 *         return `
 *             <p>Hello ${this.data.name}</p>
 *         `;
 *     }
 * }();
 *
 * console.log(Combo.isRenderable(Message)); // "true"
 */
function isRenderable(com) {
  return typeof com.render === "function";
}

/**
 * Returns the version number.
 *
 * @returns {string} The version number.
 *
 * @example
 *
 * console.log(Combo.version);
 *
 */
var version = exports.version = "3.2.0";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Component = exports.version = exports.isRenderable = exports.isComponent = undefined;

var _utils = __webpack_require__(0);

var _component = __webpack_require__(2);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.isComponent = _utils.isComponent;
exports.isRenderable = _utils.isRenderable;
exports.version = _utils.version;
exports.Component = _component2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents a component or view.
 *
 * @param {Object} options The options.
 * @param {Function} options.cloned Invoked after the component is cloned.
 * @param {Function} options.cloning Invoked before the component is cloned.
 * @param {Function} options.created Invoked after the component is created.
 * @param {Function} options.creating Invoked before the component is created.
 * @param {Function} options.render Invoked when the component needs a render.
 * @param {Function} options.mounted Invoked after the component is mounted.
 * @param {Function} options.mounting Invoked before the component is mounting.
 * @param {Function} options.updated Invoked after the component is updated.
 * @param {Function} options.updating Invoked before the component is updated.
 *
 * @example
 *
 * var Message = new class extends Combo.Component {
 *     render() {
 *         return `
 *             <p>Hello ${this.data.name}</p>
 *         `;
 *     }
 * }();
 *
 * Message.mount(document.getElementById("root"), {
 *    name: "World"
 * });
 */
var Component = function () {
	function Component(options) {
		_classCallCheck(this, Component);

		//
		// Extend the component with the options object.
		//
		Object.assign(this, options);

		//
		// If undefined, extend options with a data object.
		//
		if (typeof this.data === "undefined") {
			/**
    * Returns an object that contains data specific to the component.
    *
    * @returns {Object} The data.
    *
    * @example
    *
    * var Message = new class extends Combo.Component {
    *     render() {
    *         return `
    *             <p>Hello ${this.data.name}</p>
    *         `;
    *     }
    * }();
    *
    * Message.mount(document.getElementById("root"), {
    *     name: "World"
    * });
    *
    */
			this.data = {};
		}

		//
		// If defined, invoke the created lifecycle method.
		//
		if (typeof this.created === "function") {
			this.created();
		}
	}

	/**
  * Returns a new instance of the component.
  *
  * @returns {Object} The component.
  *
  * @example
  *
  * var Message1 = new class extends Combo.Component {
  *     render() {
  *         return `
  *             ${this.data.text}
  *         `;
  *     }
  * }();
  *
  * var Message2 = Message1.clone();
  *
  * Message1.update({
  *     text: "Hello World";
  * });
  *
  * Message2.update({
  *     text: "Goodbye World";
  * });
  *
  * Message1.mount(document.getElementById("root1"));
  * Message2.mount(document.getElementById("root2"));
  */


	_createClass(Component, [{
		key: "clone",
		value: function clone() {

			//
			// If defined, invoke the cloning lifecycle method.
			//
			if (typeof this.cloning === "function") {
				this.cloning();
			}

			//
			// Create a new instance of the component.
			//
			var clone = Object.assign(Object.create(this), this);

			//
			// If defined, invoke the cloned lifecycle method.
			//
			if (typeof this.cloned === "function") {
				this.cloned();
			}

			//
			// Return the new instance of the component.
			//
			return clone;
		}

		/**
   * Update the component's data and force a redraw if it's mounted.
   *
   * @param {Object} [values={}] The values.
   *
   * @example
   *
   * var Timer = new class extends Combo.Component {
   *     created() {
   *         this.update({
   *             tick: 0
   *         });
   *     }
   *     mounted() {
   *         setInterval(()=> {
   *             this.update({
   *                 tick: this.data.tick + 1;
   *             });
   *         }, 1000);
   *     }
   *     render() {
   *         return `
   *              <p>${this.data.tick} seconds elapsed.</p>
   *         `;
   *     }
   * }();
   *
   * Timer.mount(document.getElementById("root"));
   *
   */

	}, {
		key: "update",
		value: function update() {
			var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			var prior = this.data;

			//
			// If defined, invoke the updating lifecycle method.
			//
			if (typeof this.updating === "function") {
				this.updating(prior);
			}

			//
			// Update the component's data from the values object.
			//
			this.data = Object.assign({}, this.data, values);

			//
			// If mounted, update the component's user interface.
			//
			this.refresh();

			//
			// If defined, invoke the updated lifecycle method.
			//
			if (typeof this.updated === "function") {
				this.updated(prior);
			}
		}

		/**
   * Forces a mounted component to re-render.
   *
   * @example
   *
   * var Message = new class extends Combo.Component {
   *     render() {
   *         return `
   *             <p>Hello ${this.data.name}</p>
   *         `;
   *     }
   * }();
   *
   * Message.mount(document.getElementById("root"), {
   *     name: "World"
   * });
   *
   * Message.refresh();
   *
   */

	}, {
		key: "refresh",
		value: function refresh() {
			//
			// If mounted, re-render the component.
			//
			if (this.isMounted) {
				if (typeof this.render === "function") {
					(0, _utils._replaceHTML)(this.el, this.render());
				}
			}
		}

		/**
   * Mounts the component to a container element.
   *
   * @param {Element} el The element.
   * @param {Object} [values={}] The data.
   *
   * @example
   *
   * var List = new class extends Combo.Component {
   *     _items() {
   *         return this.data.items.map((item) => {
   *             return `
   *                 <li>${item}</li>
   *             `;
   *         }).join("");
   *     }
   *     render() {
   *         return `
   *             <ul>
   *                 ${this.items()}
   *             </ul>
   *         `;
   *     }
   * }();
   *
   * List.mount(document.getElementById("root"), {
   *     items: [
   *         "Apple",
   *         "Orange",
   *         "Banana"
   *     ]
   * });
   *
   */

	}, {
		key: "mount",
		value: function mount(el) {
			var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			//
			// If defined, invoke the mounting lifecycle method.
			//
			if (typeof this.mounting === "function") {
				this.mounting();
			}

			/**
    * Returns the element the component is mounted to. Use with caution.
    *
    * @returns {Element} The element.
    *
    * @example
    *
    * var Canvas = new class extends Combo.Component {
    *     mounted() {
    *         if(this.el.getContext) {
    *             this.context = this.el.getContext("2d");
    *         }
    *     }
    *     render() {
    *         return `
    *             <p>Your browser does not support the Canvas element.</p>
    *         `;
    *     }
    * }();
   	 *
   	 * Canvas.mount(document.getElementById("root"));
   	 *
    */
			this.el = el;

			//
			// Update the data object from the values object.
			//
			this.data = Object.assign({}, this.data, values);

			//
			// If defined, invoke the render lifecycle method.
			//
			if (typeof this.render === "function") {
				(0, _utils._replaceHTML)(this.el, this.render());
			}

			//
			// If defined, invoke the mounted lifecycle method.
			//
			if (typeof this.mounted === "function") {
				this.mounted();
			}
		}

		/**
   * Unmounts the component from its container element.
   *
   * @param {boolean} [remove=false] Remove the HTML.
   *
   * @example
   *
   * var Alert = new class extends Combo.Component {
   *     _close() {
   *         this.unmount(true);
   *     }
   *     render() {
   *         return `
   *             <div>
   *                 ${this.data.text}
   *                 <button onclick="${this.ref}._close()">Close</button>
   *             </div>
   *         `;
   *     }
   * }();
   *
   * Alert.mount(document.getElementById("root"), {
   *      text: "The college will be closed today."
   * });
   *
   */

	}, {
		key: "unmount",
		value: function unmount() {
			var remove = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

			//
			// If defined, invoke the unmounting lifecycle method.
			//
			if (typeof this.unmounting === "function") {
				this.unmounting();
			}

			//
			// If true, remove the component's HTML from the page.
			//
			if (remove === true) {
				(0, _utils._removeHTML)(this.el);
			}

			//
			// Delete the assignment to the container element.
			//
			delete this.el;

			//
			// If defined, invoke the unmounted lifecycle method.
			//
			if (typeof this.unmounted === "function") {
				this.unmounted();
			}
		}

		/**
   * Returns a boolean value that indicates if the component is mounted.
   *
   * @returns {boolean} True if the component is mounted.
   *
   * @example
   *
   * var Message = new class extends Combo.Component {
   *     render() {
   *         return `
   *             <p>Hello ${this.data.name}</p>
   *         `;
   *     }
   * }();
   *
   * console.log(Message.isMounted);
   */

	}, {
		key: "isMounted",
		get: function get() {
			return !!this.el;
		}
	}]);

	return Component;
}();

exports.default = Component;

/***/ })
/******/ ]);
});