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
	// Render a component inside its container element.
	//

	Combo.render = function (component, props) {
		var el = document.getElementById(component.root);
		//
		// Remove all child elements from the container.
		//
		if (el.firstChild !== undefined) {
			while (el.firstChild) {
				el.removeChild(el.firstChild);
			}
		}
		//
		// Render the component, passing over properties.
		//
		el.insertAdjacentHTML("beforeEnd", component.render(props));
	};

	// ## Component.
	//
	// Represents a component.
	//
	Combo.Component = function () {
		// **constructor**
		//
		// The constructor function.
		//
		function _class(root) {
			_classCallCheck(this, _class);

			// **root**
			//
			// A string that contains the ID of the root element.
			//
			this.root = root;

			// **state**
			//
			// An object that contains data specific to this component.
			//
			this.state = {};
		}
		// **update**
		//
		// Update the component's state, then redraw the component.
		//


		_createClass(_class, [{
			key: "update",
			value: function update(values) {
				this.state = Object.assign({}, this.state, values);
				//
				// Redraw the component if a root element was specified.
				//
				if (this.root) {
					Combo.render(this);
				}
			}
		}]);

		return _class;
	}();
})(Combo || (Combo = {}));
