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

	// **render**
	//
	// Render a component inside a container element.
	//

	Combo.render = function (component, data) {
		// **remove**
		//
		// Remove children of the container element.
		//
		function remove() {
			if (typeof component.$el.firstChild !== "undefined") {
				while (component.$el.firstChild) {
					component.$el.removeChild(component.$el.firstChild);
				}
			}
		}

		// **insert**
		//
		// Insert the template literal from render().
		//
		function insert() {
			component.$el.insertAdjacentHTML("beforeEnd", component.render(data));
		}

		//
		// Ensure the component has been mounted.
		//
		if (typeof component.$el !== "undefined") {
			remove();
			insert();
		}
	};

	// **version**
	//
	// Return the semantic version number of Combo.js.
	//
	Combo.version = "1.0.0";

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
			// Extend from the options.
			//
			Object.assign(this, options);

			//
			// Initialize the component.
			//
			if (typeof this.init === "function") {
				this.init();
			}

			//
			// Mount the container element.
			//
			if (typeof this.el !== "undefined") {
				this.$el = document.getElementById(this.el);

				if (typeof this.mounted === "function") {
					this.mounted();
				}
			}
		}

		// **extend**
		//
		// Returns a new instance of this class.
		//


		_createClass(_class, [{
			key: "update",


			// **update**
			//
			// Update options.data, then redraw the UI if mounted.
			//
			value: function update() {
				var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var redraw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

				this.data = Object.assign({}, this.data, values);

				if (this.$el && redraw === true) {
					Combo.render(this);
				}
			}
		}], [{
			key: "extend",
			value: function extend() {
				var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				return new this(options);
			}
		}]);

		return _class;
	}();
})(Combo || (Combo = {}));
