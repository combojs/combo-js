// **mount**
//
// Mount a component to a container element.
//
Combo.mount = function(el, component, data) {

	// **remove**
	//
	// Remove the children of the container element.
	//
	function remove() {
		if(typeof component.el.firstChild !== "undefined") {
			while(component.el.firstChild) {
				component.el.removeChild(component.el.firstChild);
			}
		}
	}

	// **render**
	//
	// Render the component in the container element.
	//
	function render() {
		//
		// Invoke the component's mounted lifecycle hook.
		//
		if(typeof component.mounted === "function") {
			component.mounted();
		}
		//
		// Insert the HTML.
		//
		component.el.insertAdjacentHTML("beforeEnd", component.render(data));
	}

	component.el = document.getElementById(el);

	remove();
	render();
};