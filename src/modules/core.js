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

// **replaceHTML**
//
// Replace children with an HTML string.
//
function _replaceHTML(el, html) {
	// **manipulating**
	//
	// Called before the DOM is manipulated.
	//
	if(typeof Combo.manipulating === "function") {
		Combo.manipulating(el);
	}

	//
	// Remove the child elements.
	//
	_removeHTML(el);

	// Insert the HTML string.
	//
	el.insertAdjacentHTML("beforeEnd", html);

	// **manipulated**
	//
	// Called after the DOM is manipulated.
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