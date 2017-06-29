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
Combo.render = function(el, value) {
	if(el.firstChild !== undefined) {
		while(el.firstChild) {
			el.removeChild(el.firstChild);
		}
	}

	el.insertAdjacentHTML("beforeEnd", value);
};

// **map**
//
// Return a concatenated string from elements in an Array.
//
Combo.map = function(obj, fn) {
	var result = "";

	obj.map((item) => {
		result += fn(item);	
	});

	return result;
};
// ## Component
//
// Represents a component.
//
Combo.Component = class {
	// **component**
	//
	// The constructor function.
	//
	constructor() {
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
	update(values = {}) {
		this.props = Object.assign({}, this.props, values);
	}
};
})(Combo || (Combo = {}));