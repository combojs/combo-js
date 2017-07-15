// ## Component
//
// Represents a component, view, or fragment.
//
Combo.Component = class {
	// **constructor**
	//
	// The constructor function.
	//
	constructor(options = {}) {
		//
		// Extend the properties from options.
		//
		Object.assign(this, options);

		//
		// Invoke the created lifecycle hook.
		//
		if(typeof this.created === "function") {
			this.created();
		}
	}

	// **extend**
	//
	// Return an instance of the component class.
	//
	static extend(options = {}) {
		return new this(options);
	}

	// **update**
	//
	// Update the data, then redraw the component if it's mounted.
	//
	update(values = {}) {
		this.data = Object.assign({}, this.data, values);

		//
		// Invoke the updated lifecycle hook.
		//
		if(typeof this.updated === "function") {
			this.updated();
		}

		//
		// Redraw the component if it's mounted.
		//
		if(this.isMounted()) {
			Combo.render(this.el, this);
		}
	}

	// **isMounted**
	//
	// Returns a boolean value determining if the component was mounted.
	//
	get isMounted() {
		return !!this.el;
	}
};
