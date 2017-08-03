// **replaceHTML**
//
// Replace the contents of the container element with an HTML string.
//
function replaceHTML(el, html) {
	//
	// Remove the child nodes from the container element.
	//
	if(typeof el.firstChild !== "undefined") {
		while(el.firstChild) {
			el.removeChild(el.firstChild);
		}
	}
	//
	// Insert the HTML.
	//
	el.insertAdjacentHTML("beforeEnd", html);
}