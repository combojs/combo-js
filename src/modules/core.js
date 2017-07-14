// **render**
//
// Render a component inside a container element.
//
Combo.render = function(component, data) {
	// **remove**
	//
	// Remove children of the container element.
	//
	function remove() {
		if (typeof component.$el.firstChild !== "undefined") {
			while(component.$el.firstChild) {
				component.$el.removeChild(component.$el.firstChild);
			}
		}
	}

	// **insert**
	//
	// Insert the template literal from render().
	//
	function insert() {
		component.$el.insertAdjacentHTML("beforeEnd", component.render(data));
	}

	//
	// Ensure the component has been mounted.
	//
	if(typeof component.$el !== "undefined") {
		remove();
		insert();
	}
};

// **version**
//
// Return the semantic version number of Combo.js.
//
Combo.version = "1.0.0";
