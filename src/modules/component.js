Combo.Component = class {

	// **clone**
	//
	// Return a new instance of the component.
	//
	constructor(options = {}) {
		// **creating**
		//
		// Invoked before the component is created.
		//
		if(typeof options.creating === "function") {
			options.creating();
		}

		//
		// Extend the component with the options.
		//
		Object.assign(this, options);

		//
		// Extend the component with a props object.
		//
		if(typeof this.props === "undefined") {
			this.props = {};
		}

		//
		// Extend the component with a data object.
		//
		if(typeof this.data === "undefined") {
			this.data = {};
		}

		// **created**
		//
		// Invoked after the component is created.
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
		// **cloning**
		//
		// Invoked before the component is cloned.
		//
		if(typeof this.cloning === "function") {
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
		if(typeof this.cloned === "function") {
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
	update(values = {}) {
		// **updating**
		//
		// Invoked before the component is updated.
		//
		if(typeof this.updating === "function") {
			this.updating();
		}
		
		//
		// Update the component's data object.
		//
		this.data = Object.assign({}, this.data, values);

		//
		// Redraw the component if it was mounted.
		//
		if(this.isMounted) {
			_replaceHTML(this.el, this.render());
		}

		// **updated**
		//
		// Invoked after the component is updated.
		//	
		if(typeof this.updated === "function") {
			this.updated();
		}		
	}
	
	// **mount**
	//
	// Mount the component to a container element.
	//
	mount(el, values = {}) {
		// **mounting**
		//
		// Invoked before the component is mounted.
		//
		if(typeof this.mounting === "function") {
			this.mounting();
		}
		
		//
		// Mount the component to a container element.
		//
		this.el = el;

		//
		// Update the component's data object.
		//
		this.data = Object.assign({}, this.data, values);

		//
		// Draw the component in its container element.
		//
		_replaceHTML(this.el, this.render());

		// **mounted**
		//
		// Invoked after the component is mounted.
		//	
		if(typeof this.mounted === "function") {
			this.mounted();
		}		
	}
	
	// **unmount**
	//
	// Unmount the component from its container element.
	//
	unmount(remove = false) {
		// **unmounting**
		//
		// Invoked before the component is unmounted.
		//
		if(typeof this.unmounting === "function") {
			this.unmounting();
		}

		//
		// Remove the component from the container element.
		//
		if(remove === true) {
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
		if(typeof this.unmounted === "function") {
			this.unmounted();
		}			
	}

	// **isMounted**
	//
	// Returns a boolean value that indicates if the component is mounted.
	//
	get isMounted() {
		return !!this.el;
	}
};

