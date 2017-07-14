// **render**
//
// Render a component inside its container element.
//
Combo.render = function(component, props) {
	let el = document.getElementById(component.root);
	//
	// Remove all child elements from the container.
	//
	if(el.firstChild !== undefined) {
		while(el.firstChild) {
			el.removeChild(el.firstChild);
		}
	}
	//
	// Render the component, passing over properties.
	//
	el.insertAdjacentHTML("beforeEnd", component.render(props));
};

 