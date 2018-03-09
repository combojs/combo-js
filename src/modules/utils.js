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
	if(append == false) {
		_removeHTML(el);
	}

	el.insertAdjacentHTML("beforeEnd", html);
}

/**
 * Returns a boolean value determining if an object is a component.
 *
 * @param {Object} obj The object.
 *
 * @returns {boolean} True if `obj` is a component.
 *
 * @example
 *
 * var Message = new class extends Combo.Component {
 *     render() {
 *         return `
 *             <p>Hello ${this.data.name}</p>
 *         `;
 *     }
 * }();
 *
 * console.log(Combo.isComponent(Message)); // "true"
 */
export function isComponent(obj) {
	return typeof obj.mount === "function"
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
