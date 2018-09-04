/**
 * Determine if an object contains any properties.
 *
 * @private
 * @returns {boolean} True if empty
 *
 * @example
 *
 * console.log(isObjectEmpty({}));
 */

export function _isObjectEmpty(props) {
	return Object.keys(props).length === 0 && props.constructor === Object
}

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
 * @param {boolean} append Reserved for possible future use.
 *
 * @example
 *
 * _removeHTML(document.getElementById("root"));
 *
 */
export function _replaceHTML(el, html, append = false) {
	if(append == false) {
		_removeHTML(el);
	}

	el.insertAdjacentHTML("beforeEnd", html);
}
