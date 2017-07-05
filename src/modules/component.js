// ## Component.
//
// Represents a component.
//
Combo.Component = class {
	// **constructor**
	//
	// The constructor function.
	//
	constructor(root) {
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
	update(values) {
		this.state = Object.assign({}, this.state, values);
		//
		// Redraw the component if a root element was specified.
		//
		if(this.root) {
			Combo.render(this);
		}
	}
};
