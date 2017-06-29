// **render**
//
// Render a template literal inside a container element.
//
Combo.render = function(el, value) {
	if(el.firstChild !== undefined) {
		while(el.firstChild) {
			el.removeChild(el.firstChild);
		}
	}

	el.insertAdjacentHTML("beforeEnd", value);
};

// **map**
//
// Return a concatenated string from elements in an Array.
//
Combo.map = function(obj, fn) {
	var result = "";

	obj.map((item) => {
		result += fn(item);	
	});

	return result;
};