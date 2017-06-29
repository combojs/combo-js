"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// # Combo
//
// The core methods and properties.
//

var Combo;

(function (Combo) {

	"use strict";
	// **render**
	//
	// Render a template literal inside a container element.
	//

	Combo.render = function (el, value) {
		if (el.firstChild !== undefined) {
			while (el.firstChild) {
				el.removeChild(el.firstChild);
			}
		}

		el.insertAdjacentHTML("beforeEnd", value);
	};

	// **map**
	//
	// Return a concatenated string from elements in an Array.
	//
	Combo.map = function (obj, fn) {
		var result = "";

		obj.map(function (item) {
			result += fn(item);
		});

		return result;
	};
	// ## Component
	//
	// Represents a component.
	//
	Combo.Component = function () {
		// **component**
		//
		// The constructor function.
		//
		function _class() {
			_classCallCheck(this, _class);

			// **props**
			//
			// An object containing the component's properties.
			//
			this.props = {};
		}

		// **update**
		//
		// Update the properties from an object containing the new values. 
		//


		_createClass(_class, [{
			key: "update",
			value: function update() {
				var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				this.props = Object.assign({}, this.props, values);
			}
		}]);

		return _class;
	}();
})(Combo || (Combo = {}));
