import {_removeHTML, _replaceHTML, _isObjectEmpty} from "./utils.js";

/**
 * Represents a mounted component or a view.
 *
 * @example
 *
 * const Example = new class extends Combo.Component {
 *     render() {
 *         return `
 *             <div>Hello World</div>
 *         `;
 *     }
 * }();
 *
 * Example.mount(document.getElementById("root"));
 */
export default class Component {
	constructor() {
		/**
		 * Returns an object that contains the component data.
		 *
		 * @returns {object} The data.
		 *
		 * @example
		 *
		 * const Example = new class extends Combo.Component {
		 *     created() {
		 *         this.data = {
		 *             name: "World"
		 *         }
		 *     }
		 *     render() {
		 *         return `
		 *             <div>Hello ${this.data.name}</div>
		 *         `;
		 *     }
		 * }();
		 *
		 * Example.mount(document.getElementById("root"));
		 */
		this.data = {};

		/**
		 * Returns an object that contains the component props.
		 *
		 * @returns {object} The props.
		 *
		 * @example
		 *
		 * const Example = new class extends Combo.Component {
		 *     render() {
		 *         return `
		 *             <div>Hello ${this.props.name}</div>
		 *         `;
		 *     }
		 * }();
		 *
		 * Example.mount(document.getElementById("root"), {
		 *     name: "World"
		 * });
		 */
		this.props = {};

		/**
		 * Returns the element the component is mounted to.
		 *
		 * @returns {object} The element.
		 *
		 * @example
		 *
		 * const Example = new class extends Combo.Component {
		 *     render() {
		 *         return `
		 *             <div>Hello ${this.el.dataset.name}</div>
		 *         `;
		 *     }
		 * }();
		 *
		 * Example.mount(document.getElementById("root"));
		 */
		this.el = undefined;

		//
		// Invoke the created lifecycle hook.
		//
		this.created();
	}

	/**
	 * Mount the component to a container element.
	 *
	 * @param {object} el The element.
	 * @param {object} [props={}] The props.
	 *
	 * @example
	 *
	 * const Example = new class extends Combo.Component {
	 *     mounted() {
	 *         console.log("The component was mounted.")
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	mount(el, props={}) {
		//
		// Invoke the mounting lifecycle hook.
		//
		this.mounting();

		//
		// Copy el to this.el.
		//
		this.el = el;

 		//
		// Handle the props.
		//
		if (!_isObjectEmpty(props)) {
			//
			// Invoke the receiving lifecycle hook.
			//
			this.receiving(props);

			//
			// Copy props to this.props.
			//
			this.props = Object.assign({}, this.props, props);
		}

		//
		// Render the component.
		//
		_replaceHTML(this.el, this.render());

		//
		// Invoke the mounted lifecycle hook.
		//
		this.mounted();
	}

	/**
	 * Unmount the component from its container element.
	 *
	 * @param {boolean} [remove=false] Remove the rendered output.
	 *
	 * @example
	 *
	 * const Example = new class extends Combo.Component {
	 *     mounted() {
	 *         this.unmount();
	 *     }
	 *     unmounted() {
	 *         console.log("The component was unmounted.")
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	unmount(remove = true) {
		//
		// Invoke the unmounting lifecycle hook.
		//
		this.unmounting();

		//
		// Remove the rendered output on the page.
		//
		if(remove === true) { _removeHTML(this.el); }

		//
		// Delete the assignment to the element.
		//
		this.el = undefined;

		//
		// Invoke the unmounted lifecycle hook.
		//
		this.unmounted();
	}

	/**
	 * Update a mounted component then re-render it.
	 *
	 * @param {Object} [values={}] The values.
	 *
	 * @example
	 *
	 * const Example = new class extends Combo.Component {
	 *     created() {
	 *         this.update({});
	 *     }
	 *     updated() {
	 *         console.log("The component was updated.")
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	update(data = {}) {
		var prev = this.data;

		//
		// Invoke the updating lifecycle hook.
		//
		this.updating(prev);
		//
		// Copy data to this.data.
		//
		this.data = Object.assign({}, this.data, data);

		//
		// Invoke the updated lifecycle hook.
		//
		this.updated(prev);

		//
		// Re-render the component.
		//
		this.refresh();
	}

	/**
	 * Force a mounted component to re-render itself.
	 *
	 * @returns {string} The rendered output.
	 *
	 * @example
	 *
	 * const Example = new class extends Combo.Component {
	 *     render() {
	 *         return `
	 *             <div>Hello World</div>
	 *         `;
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	refresh() {
		this.mount(this.el);
	}

	/**
	 * Add an event listener to one or more child elements.
	 *
	 * @param {string} [selector] The selector string.
	 * @param {string} [event] The event.
	 * @param {function} [cb] The callback function.
	 *
	 * @example
	 *
	 * const Example = new class extends Combo.Component {
	 *     created() {
	 *         this.data = {
	 *             field1: "",
	 *             field2: "",
	 *             field3: ""
	 *         };
	 *     }
	 *     mounted() {
	 *         this.on("[type='text']", "change", (e) => {
	 *             this.update({
	 *                 [e.target.name]: e.target.value
	 *             });
	 *         });
	 *     }
	 *
	 *     render() {
	 *         return `
	 *             <input name="field1" type="text" value="${this.data.field1}">
	 *             <input name="field2" type="text" value="${this.data.field2}">
	 *             <input name="field3" type="text" value="${this.data.field3}">
	 *
	 *             <p>${JSON.stringify(this.data)}</p>
	 *         `;
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	on(selector, event, cb) {
		var els = this.el.querySelectorAll(selector);

		for(var index = 0, length = els.length; index < length; index++) {
			els[index].addEventListener(event, (e) => cb(e));
		}
	}

	/**
	 * Returns a boolean value determining if the component is mounted.
	 *
	 * @returns {boolean} True if mounted.
	 *
	 * @example
	 *
	 * const Example = new class extends Combo.Component {
	 *     render() {
	 *         return `
	 *             <div>Hello ${this.isMounted}</div>
	 *         `;
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	get isMounted() { return !!this.el; }

	/**
	 * Invoked after the component was created.
	 *
	 * @example
	 *
	 * const Example = new class extends Combo.Component {
	 *     created() {
	 *         console.log("The component was created.")
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	created() {};

	/**
	 * Invoked before the component is updated.
	 *
	 * @param {object} prev The previous data.
	 *
	 * @example
	 *
	 * const Example = new class extends Combo.Component {
	 *     created() {
	 *         this.update({});
	 *     }
	 *     updating() {
	 *         console.log("The component will update.")
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	updating() {};

	/**
	 * Invoked after the component was updated.
	 *
	 * @param {object} prev The previous data.
	 *
	 * @example
	 *
	 * const Example = new class extends Combo.Component {
	 *     created() {
	 *         this.update({});
	 *     }
	 *     updated() {
	 *         console.log("The component was updated.")
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	updated() {};

	/**
	 * Invoked before the component is mounted.
	 *
	 * @example
	 *
	 * const Example = new class extends Combo.Component {
	 *     mounting() {
	 *         console.log("The component will mount.")
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	mounting() {};

	/**
	 * Invoked after the component was mounted.
	 *
	 * @example
	 *
	 * const Example = new class extends Combo.Component {
	 *     mounted() {
	 *         console.log("The component was mounted.")
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	mounted() {};

	/**
	 * Invoked before the component is unmounted.
	 *
	 * @example
	 *
	 * const Example = new class extends Combo.Component {
	 *     mounted() {
	 *         this.unmount();
	 *     }
	 *     unmounting() {
	 *         console.log("The component will unmount.")
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	unmounting() {};

	/**
	 * Invoked after the component was unmounted.
	 *
	 * @example
	 *
	 * const Example = new class extends Combo.Component {
	 *     mounted() {
	 *         this.unmount();
	 *     }
	 *     unmounted() {
	 *         console.log("The component was unmounted.")
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	unmounted() {};

	/**
	 * Invoked before the component receives props.
	 *
	 * @example
	 *
	 * const Example = new class extends Combo.Component {
	 *     receiving() {
	 *         console.log("The component will receive props.")
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"), {
	 *     name: "Combo"
	 * });
	 */
	receiving() {};

	/**
	 * Invoked when the component is mounted, updated, or refreshed.
	 *
	 * @returns {string} The rendered output.
	 *
	 * @example
	 *
	 * const Example = new class extends Combo.Component {
	 *     render() {
	 *         return `
	 *             <div>Hello World</div>
	 *         `;
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	render() { return ""; };
};

