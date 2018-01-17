import {_removeHTML, _replaceHTML} from "./utils.js";

/**
 * Represents a component or template.
 *
 * @param {Object} options The options.
 * @param {Function} options.cloned Invoked after the component is cloned.
 * @param {Function} options.cloning Invoked before the component is cloned.
 * @param {Function} options.created Invoked after the component is created.
 * @param {Function} options.creating Invoked before the component is created.
 * @param {Function} options.render Invoked when the component needs a render.
 * @param {Function} options.mounted Invoked after the component is mounted.
 * @param {Function} options.mounting Invoked before the component is mounting.
 * @param {Function} options.updated Invoked after the component is updated.
 * @param {Function} options.updating Invoked before the component is updated.
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
 * Message.mount(document.getElementById("root"), {
 *    name: "World"
 * });
 */
export default class Component {
	constructor(options) {
		//
		// Extend the component with the options object.
		//
		Object.assign(this, options);

		//
		// If undefined, extend options with a data object.
		//
		if(typeof this.data === "undefined") {
			/**
			 * Returns an object that contains data specific to the component.
			 *
			 * @returns {Object} The data.
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
			 * Message.mount(document.getElementById("root"), {
			 *     name: "World"
			 * });
			 *
			 */
			this.data = {};
		}

		//
		// If defined, invoke the created lifecycle method.
		//
		if(typeof this.created === "function") {
			this.created();
		}
	}

	/**
	 * Returns a new instance of the component.
	 *
	 * @returns {Object} The component.
	 *
	 */
	clone() {

		//
		// If defined, invoke the cloning lifecycle method.
		//
		if(typeof this.cloning === "function") {
			this.cloning();
		}

		//
		// Create a new instance of the component.
		//
		var clone = Object.assign(Object.create(this), this);

		//
		// If defined, invoke the cloned lifecycle method.
		//
		if(typeof this.cloned === "function") {
			this.cloned();
		}

		//
		// Return the new instance of the component.
		//
		return clone;
	}

	/**
	 * Update the component's data and force a redraw if it's mounted.
	 *
	 * @param {Object} [values={}] The values.
	 *
	 * @example
	 *
	 * var Timer = new class extends Combo.Component {
	 *     created() {
	 *         this.update({
	 *             tick: 0
	 *         });
	 *     }
	 *     mounted() {
	 *         setInterval(()=> {
	 *             this.update({
	 *                 tick: this.data.tick + 1;
	 *             });
	 *         }, 1000);
	 *     }
	 *     render() {
	 *         return `
	 *              <p>${this.data.tick} seconds elapsed.</p>
	 *         `;
	 *     }
	 * }();
	 *
	 * Timer.mount(document.getElementById("root"));
	 *
	 */
	update(values = {}) {
		var prior = this.data;

		//
		// If defined, invoke the updating lifecycle method.
		//
		if(typeof this.updating === "function") {
			this.updating(prior);
		}

		//
		// Update the component's data from the values object.
		//
		this.data = Object.assign({}, this.data, values);

		//
		// If mounted, update the component's user interface.
		//
		if(this.isMounted) {
			if(typeof this.render === "function") {
				_replaceHTML(this.el, this.render());
			}
		}

		//
		// If defined, invoke the updated lifecycle method.
		//
		if(typeof this.updated === "function") {
			this.updated(prior);
		}
	}

	/**
	 * Mounts the component to a container element.
	 *
	 * @param {Element} el The element.
	 * @param {Object} [values={}] The data.
	 *
	 * @example
	 *
	 * var List = new class extends Combo.Component {
	 *     _items() {
	 *         return this.data.items.map((item) => {
	 *             return `
	 *                 <li>${item}</li>
	 *             `;
	 *         }).join("");
	 *     }
	 *     render() {
	 *         return `
	 *             <ul>
	 *                 ${this.items()}
	 *             </ul>
	 *         `;
	 *     }
	 * }();
	 *
	 * List.mount(document.getElementById("root"), {
	 *     items: [
	 *         "Apple",
	 *         "Orange",
	 *         "Bannana"
	 *     ]
	 * });
	 *
	 */
	mount(el, values = {}) {
		//
		// If defined, invoke the mounting lifecycle method.
		//
		if(typeof this.mounting === "function") {
			this.mounting();
		}

		/**
		 * Returns the element the component is mounted to. Use with caution.
		 *
		 * @returns {Element} The element.
		 *
		 * @example
		 *
		 * var Canvas = new class extends Combo.Component {
		 *     mounted() {
		 *         if(this.el.getContext) {
		 *             this.context = this.el.getContext("2d");
		 *         }
		 *     }
		 *     render() {
		 *         return `
		 *             <p>Your browser does not support the Canvas element.</p>
		 *         `;
		 *     }
		 * }();
	 	 *
	 	 * Canvas.mount(document.getElementById("root"));
	 	 *
		 */
		this.el = el;

		//
		// Update the data object from the values object.
		//
		this.data = Object.assign({}, this.data, values);

		//
		// If defined, invoke the render lifecycle method.
		//
		if(typeof this.render === "function") {
			_replaceHTML(this.el, this.render());
		}

		//
		// If defined, invoke the mounted lifecycle method.
		//
		if(typeof this.mounted === "function") {
			this.mounted();
		}
	}

	/**
	 * Unmounts the component from its container element.
	 *
	 * @param {boolean} [remove=false] Remove the HTML.
	 *
	 * @example
	 *
	 * var Alert = new class extends Combo.Component {
	 *     _close() {
	 *         this.unmount(true);
	 *     }
	 *     render() {
	 *         return `
	 *             <div>
	 *                 ${this.data.text}
	 *                 <button onclick="${this.ref}._close()">Close</button>
	 *             </div>
	 *         `;
	 *     }
	 * }();
	 *
	 * Alert.mount(document.getElementById("root"), {
	 *      text: "The college will be closed today."
	 * });
	 *
	 */
	unmount(remove = false) {
		//
		// If defined, invoke the unmounting lifecycle method.
		//
		if(typeof this.unmounting === "function") {
			this.unmounting();
		}

		//
		// If true, remove the component's HTML from the page.
		//
		if(remove === true) {
			_removeHTML(this.el);
		}

		//
		// Delete the assignment to the container element.
		//
		delete this.el;

		//
		// If defined, invoke the unmounted lifecycle method.
		//
		if(typeof this.unmounted === "function") {
			this.unmounted();
		}
	}

	/**
	 * Returns a boolean value that indicates if the component is mounted.
	 *
	 * @returns {boolean} True if the component is mounted.
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
	 * console.log(Message.isMounted);
	 */
	get isMounted() {
		return !!this.el;
	}

	/**
	 * Returns the variable name the component is assigned to.
	 *
	 * @returns {string} The variable name.
	 *
	 * @example
	 *
	 * var Alert = new class extends Combo.Component {
	 *     _close() {
	 *         this.unmount(true);
	 *     }
	 *     render() {
	 *         return `
	 *             <div>
	 *                 ${this.data.text}
	 *                 <button onclick="${this.ref}._close()">Close</button>
	 *             </div>
	 *         `;
	 *     }
	 * }();
	 *
	 * Alert.mount(document.getElementById("root"), {
	 *      text: "The college will be closed today."
	 * });
	 *
	 */
	get ref() {
		/*eslint-disable */
			for (var instance in window){
				if (!/webkitStorageInfo|webkitIndexedDB/.test(instance) && window[instance] === this) {
					return instance;
				}
			}
		/*eslint-enable */
	}
}
