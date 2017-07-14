//
//
//
//
Combo.render = function(el, component, data) {
	// **remove**
	//
	// Remove the children of the container element.
	//
	function remove() {
		if (typeof component.el.firstChild !== "undefined") {
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
		component.el.insertAdjacentHTML("beforeEnd", component.render(data));

		if(typeof component.rendered === "function") {
			component.rendered();
		}
	}
	// **mount**
	//
	// Invoke the component's mount lifecycle hook.
	//
	function mount() {
		if(typeof component.mounted === "function") {
			component.mounted();
		}
	}

	component.el = document.getElementById(el);
alert(component.el);
	remove();
	render();
	mount();
};
