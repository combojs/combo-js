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
		// Extend the component from the options.
		//
		Object.assign(this, options);
		//
		// Invoke the created lifecycle hook.
		//
		if(typeof this.created === "function") {
			this.created();
		}
	}
	// **clone**
	//
	// Return a new instance of the component.
	//
	clone() {
		var clone = Object.assign(Object.create(this), this);
		//
		// Invoke the cloned lifecycle hook.
		//
		if(typeof this.cloned === "function") {
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
		if(this.isMounted) {
			this.mount(this.el);
		}
	}	
	// **mount**
	//
	// Mount the component to a container element.
	//
	mount(el) {
		this.el = el;
		//
		// Replace the HTML of the container element.
		//
		replaceHTML(el, this.render());
		//
		// Invoke the mounted lifecycle hook.
		//
		if(typeof this.mounted === "function") {
			this.mounted();
		}
	}
	// **isMounted**
	//
	// Determining if the component is mounted.
	//
	get isMounted() {
		return !!this.el;
	}
};