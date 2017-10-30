// ## Core

// **removeHTML**
//
// Remove children from a container element.
//
function _removeHTML(el) {
	if(typeof el.firstChild !== "undefined") {
		while(el.firstChild) {
			el.removeChild(el.firstChild);
		}
	}
}

// **outputHTML**
//
// Replace or append children in a container element.
//
function _outputHTML(el, html, append = false) {
	// **manipulating**
	//
	// Invoked before the DOM is manipulated.
	//
	if(typeof Combo.manipulating === "function") {
		Combo.manipulating(el);
	}

	//
	// Remove the child elements.
	//
	if (append === false) {
		_removeHTML(el);
	}

	// Insert the HTML string.
	//
	el.insertAdjacentHTML("beforeEnd", html);

	// **manipulated**
	//
	// Invoked after the DOM is manipulated.
	//
	if(typeof Combo.manipulated === "function") {
		Combo.manipulated(el);
	}
}

// **version**
//
// Returns the semantic version number.
//
Combo.version = "@version";