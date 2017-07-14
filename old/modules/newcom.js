// ## Component
//
// Represents a component, view, or fragment.
//
class Component {
	// **constructor**
	//
	// The constructor function.
	//
	constructor(options = {}) {
		// **options**
		//
		// An object containing the component's options.
		//
		Object.assign(this, options);

		// **options.init**
		//
		// Called before the component is rendered.
		//
		if(typeof this.init === "function") {
			this.init();
		}
	}
	// **extend**
	//
	// Returns a new instance of the class.
	//
	static extend(options = {}) {
		return new this(options);
	}
}
// ***********
// TEMP
// ***********
function render(component, props) {
	document.getElementById(component.el).innerHTML = component.render(props);
}
// ***********
// TEST
// ***********

var Test = Component.extend({
	el: "root",
	render: function(props) {
		return `
			<h1>Hello ${this.props.name}</h1>
		`;
	}
});

render(Test1, {
	name: "456"
});
