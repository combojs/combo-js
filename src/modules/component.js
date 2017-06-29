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