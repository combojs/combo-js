"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Combo.js
 *
 * Copyright 2017-present, Eric Harms.
 *
 * The MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Combo;

(function (Combo) {

	"use strict";

	// **replaceHTML**
	//
	// Replace the contents of the container element with an HTML string.
	//

	function replaceHTML(el, html) {
		//
		// Remove the child nodes from the container element.
		//
		if (typeof el.firstChild !== "undefined") {
			while (el.firstChild) {
				el.removeChild(el.firstChild);
			}
		}
		//
		// Insert the HTML.
		//
		el.insertAdjacentHTML("beforeEnd", html);
	}
	// ## Component
	//
	// Represents a component, view, or fragment.
	//
	Combo.Component = function () {
		// **constructor**
		//
		// The constructor function.
		//
		function _class() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			_classCallCheck(this, _class);

			//
			// Extend the component from the options.
			//
			Object.assign(this, options);
			//
			// Add the data object if undefined.
			//
			if (typeof this.data === "undefined") {
				this.data = {};
			}
			//
			// Invoke the created lifecycle hook.
			//
			if (typeof this.created === "function") {
				this.created();
			}
		}
		// **clone**
		//
		// Return a new instance of the component.
		//


		_createClass(_class, [{
			key: "clone",
			value: function clone() {
				var clone = Object.assign(Object.create(this), this);
				//
				// Invoke the cloned lifecycle hook.
				//
				if (typeof this.cloned === "function") {
					this.cloned();
				}
				//
				// Return the instance of the component.
				//
				return clone;
			}
			// **update**
			//
			// Update the component's data and redraw it.
			//

		}, {
			key: "update",
			value: function update() {
				var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				this.data = Object.assign({}, this.data, values);
				//
				// Invoke the updated lifecycle hook.
				//
				if (typeof this.updated === "function") {
					this.updated();
				}
				//
				// Redraw the component if it's mounted.
				//
				if (this.isMounted) {
					this.mount(this.el);
				}
			}
			// **mount**
			//
			// Mount the component to a container element.
			//

		}, {
			key: "mount",
			value: function mount(el) {
				this.el = el;
				//
				// Invoke the beforeMount lifecycle hook.
				//
				if (typeof this.beforeMount === "function") {
					this.beforeMount();
				}
				//
				// Replace the HTML of the container element.
				//
				replaceHTML(el, this.render());
				//
				// Invoke the mounted lifecycle hook.
				//
				if (typeof this.mounted === "function") {
					this.mounted();
				}
			}
			// **isMounted**
			//
			// Determining if the component is mounted.
			//

		}, {
			key: "isMounted",
			get: function get() {
				return !!this.el;
			}
		}]);

		return _class;
	}();
	// ## Stylesheet
	//
	// Represents a stylesheet.
	//
	Combo.Stylesheet = function () {
		// **constructor**
		//
		// The constructor function.
		//	
		function _class2() {
			var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			_classCallCheck(this, _class2);

			for (var style in styles) {
				var result = "";

				for (var rule in styles[style]) {
					result += rule + ":" + styles[style][rule] + ";";
				}

				this[style] = result;
			}
		}

		return _class2;
	}();
})(Combo || (Combo = {}));
