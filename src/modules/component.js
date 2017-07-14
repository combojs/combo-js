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
		// Extend from the options.
		//
		Object.assign(this, options);

		//
		// Initialize the component.
		//
		if(typeof this.init === "function") {
			this.init();
		}

		//
		// Mount the container element.
		//
		if(typeof this.el !== "undefined") {
			this.$el = document.getElementById(this.el);

			if(typeof this.mounted === "function") {
				this.mounted();
			}
		}
	}

	// **extend**
	//
	// Returns a new instance of the Component class.
	//
	static extend(options = {}) {
		return new this(options);
	}

	// **update**
	//
	// Update options.data, then redraw the UI if mounted.
	//
<<<<<<< HEAD
	update(values = {}, redraw = true) {
		this.data = Object.assign({}, this.data, values);

		if(this.$el && redraw === true) {
=======
	update(values, redraw = true) {
		this.state = Object.assign({}, this.state, values);
		//
		// Redraw the component if a root element was specified.
		//
		if(this.root && redraw === true) {
>>>>>>> e3259e14c7631462ac6e98544cae4cc22d0e5452
			Combo.render(this);
		}
	}
};
