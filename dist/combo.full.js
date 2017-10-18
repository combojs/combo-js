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

	// **removeHTML**
	//
	// Remove children from a container element.
	//

	function _removeHTML(el) {
		if (typeof el.firstChild !== "undefined") {
			while (el.firstChild) {
				el.removeChild(el.firstChild);
			}
		}
	}

	// **replaceHTML**
	//
	// Replace children with an HTML string.
	//
	function _replaceHTML(el, html) {
		// **manipulating**
		//
		// Called before the DOM is manipulated.
		//
		if (typeof Combo.manipulating === "function") {
			Combo.manipulating(el);
		}

		//
		// Remove the child elements.
		//
		_removeHTML(el);

		// Insert the HTML string.
		//
		el.insertAdjacentHTML("beforeEnd", html);

		// **manipulated**
		//
		// Called after the DOM is manipulated.
		//
		if (typeof Combo.manipulated === "function") {
			Combo.manipulated(el);
		}
	}

	Combo.Component = function () {

		// **clone**
		//
		// Return a new instance of the component.
		//
		function _class() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			_classCallCheck(this, _class);

			// **creating**
			//
			// Invoked before the component is created.
			//
			if (typeof options.creating === "function") {
				options.creating();
			}

			//
			// Extend the component with the options.
			//
			Object.assign(this, options);

			//
			// Extend the component with a props object.
			//
			if (typeof this.props === "undefined") {
				this.props = {};
			}

			//
			// Extend the component with a data object.
			//
			if (typeof this.data === "undefined") {
				this.data = {};
			}

			// **created**
			//
			// Invoked after the component is created.
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
				// **cloning**
				//
				// Invoked before the component is cloned.
				//
				if (typeof this.cloning === "function") {
					this.cloning();
				}

				//
				// Create a new instance of the component.
				//
				var clone = Object.assign(Object.create(this), this);

				// **cloned**
				//
				// Invoked after the component is cloned.
				//	
				if (typeof this.cloned === "function") {
					this.cloned();
				}

				//
				// Return the new instance of the component.
				//
				return clone;
			}

			// **update**
			//
			// Update the data and redraw the component if it's mounted.
			//

		}, {
			key: "update",
			value: function update() {
				var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				// **updating**
				//
				// Invoked before the component is updated.
				//
				if (typeof this.updating === "function") {
					this.updating();
				}

				//
				// Update the component's data object.
				//
				this.data = Object.assign({}, this.data, values);

				//
				// Redraw the component if it was mounted.
				//
				if (this.isMounted) {
					_replaceHTML(this.el, this.render());
				}

				// **updated**
				//
				// Invoked after the component is updated.
				//	
				if (typeof this.updated === "function") {
					this.updated();
				}
			}

			// **mount**
			//
			// Mount the component to a container element.
			//

		}, {
			key: "mount",
			value: function mount(el) {
				var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				// **mounting**
				//
				// Invoked before the component is mounted.
				//
				if (typeof this.mounting === "function") {
					this.mounting();
				}

				//
				// Mount the component to a container element.
				//
				this.el = el;

				//
				// Update the component's prop object.
				//
				this.props = Object.assign({}, this.props, values);

				//
				// Draw the component in its container element.
				//
				_replaceHTML(this.el, this.render());

				// **mounted**
				//
				// Invoked after the component is mounted.
				//	
				if (typeof this.mounted === "function") {
					this.mounted();
				}
			}

			// **unmount**
			//
			// Unmount the component from its container element.
			//

		}, {
			key: "unmount",
			value: function unmount() {
				var remove = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

				// **unmounting**
				//
				// Invoked before the component is unmounted.
				//
				if (typeof this.unmounting === "function") {
					this.unmounting();
				}

				//
				// Remove the component from the container element.
				//
				if (remove === true) {
					_removeHTML(this.el);
				}

				//
				// Delete the assignment to the container element.
				//	
				delete this.el;

				// **unmounted**
				//
				// Invoked after the component is mounted.
				//	
				if (typeof this.unmounted === "function") {
					this.unmounted();
				}
			}

			// **isMounted**
			//
			// Returns a boolean value that indicates if the component is mounted.
			//

		}, {
			key: "isMounted",
			get: function get() {
				return !!this.el;
			}
		}]);

		return _class;
	}();
})(Combo || (Combo = {}));
