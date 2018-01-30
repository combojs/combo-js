/**
 * Removes the innerHTML of an element.
 *
 * @private
 * @param {Element} el The element.
 *
 * @example
 *
 * _removeHTML(document.getElementById("root"));
 *
 */
export function _removeHTML(el) {
	if(typeof el.firstChild !== "undefined") {
		while(el.firstChild) {
			el.removeChild(el.firstChild);
		}
	}
}

/**
 * Replaces the innerHTML of an element.
 *
 * @private
 * @param {Element} el The element.
 * @param {string} html The HTML.
 * @param {boolean} append Reserved for future use.
 *
 * @example
 *
 * _removeHTML(document.getElementById("root"));
 *
 */
export function _replaceHTML(el, html, append = false) {
	if(append==false) {
		_removeHTML(el);
	}

	el.insertAdjacentHTML("beforeEnd", html);
}

/**
 * Returns the version number.
 *
 * @returns {string} The version number.
 *
 * @example
 *
 * console.log(Combo.version);
 *
 */
export const version = "$VERSION";
