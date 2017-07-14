// ## Component.
//
// Represents a component.
//
Combo.Component = class {
	// **constructor**
	//
	// The constructor function.
	//
	constructor(root, defaults = {}) {
		// **root**
		//
		// A string that contains the ID of the root element.
		//
		this.root = root;

		// **state**
		//
		// An object that contains data specific to this component.
		//
		this.state = defaults;
	}
	// **getName**
	//
	// Return the variable name of the component's instance.
	//
	getName() {
		for (var instance in window){
			if (window[instance] === this){
				return instance;
			}
		}
	}
	// **update**
	//
	// Update the component's state, then redraw the component.
	//
	update(values, redraw = true) {
		this.state = Object.assign({}, this.state, values);
		//
		// Redraw the component if a root element was specified.
		//
		if(this.root && redraw === true) {
			Combo.render(this);
		}
	}
};
