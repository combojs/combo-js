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
		 * Returns an object that contains the component props.
		 *
		 * @returns {object} The props.
		 *
		 * @example
		 *
		 * const Example = new class extends Component {
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
		 * Returns an object that contains the component state.
		 *
		 * @returns {object} The data.
		 *
		 * @example
		 *
		 * const Example = new class extends Component {
		 *     created() {
		 *         this.state = {
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
		this.state = {};

		/**
		 * Returns the element the component is mounted to.
		 *
		 * @returns {object} The element.
		 *
		 * @example
		 *
		 * const Example = new class extends Component {
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
	 * const Example = new class extends Component {
	 *     mounted() {
	 *         console.log("The component was mounted.")
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	mount(el, props = {}) {
		//
		// Ensure we should receive properties.
		//
		if(!_isObjectEmpty(props)) {
 			//
 			// Invoke the receiving lifecycle hook.
 			//
 			props = this.receiving(props);

			//
			// Copy props to this.props.
			//
			this.props = Object.assign({}, this.props, props);

 			//
 			// Invoke the received lifecycle hook.
 			//
 			this.received(props);
		}

		//
		// Ensure the component should mount.
		//
		if(this.canMount(el, props)) {
 			//
 			// Invoke the mounting lifecycle hook.
 			//
 			this.mounting();

 			//
 			// Create the element assignment.
 			//
 			this.el = el

 			//
 			// Invoke the mounted lifecycle hook.
 			//
 			this.mounted();

 			//
 			// Render the component on the page.
 			//
 			this.refresh();
		}
	}

	/**
	 * Unmount the component from its container element.
	 *
	 * @example
	 *
	 * const Example = new class extends Component {
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
	unmount() {
		//
		// Ensure the component should unmount.
		//
		if(this.canUnmount()) {
  			//
 			// Invoke the unmounting lifecycle hook.
 			//
 			this.unmounting();

 			//
 			// Invoke the unmounted lifecycle hook.
 			//
 			this.unmounted();
		}
	}

	/**
	 * Update a component state and force it re-render
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
	update(values=[]) {
		//
		// Ensure that the component should update.
		//
		if(this.canUpdate(values)) {
			//
			// Make a copy of the original state.
			//
			let prev = this.state;

  			//
 			// Invoke the updating lifecycle hook.
 			//
 			this.updating(values, prev);

  			//
 			// Copy the values to this.state.
 			//
 			this.state = Object.assign({}, this.state, values);

 			//
 			// Invoke the updated lifecycle hook.
 			//
 			this.updated(values, prev);

  			//
 			// Render the component.
 			//
 			this.refresh();
		}
	}

	/**
	 * Force a component to re-render itself.
	 *
	 * @returns {string} The rendered output.
	 *
	 * @example
	 *
	 * const Example = new class extends Component {
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
		//
		// Render the component on the page.
		//
		_replaceHTML(this.el, this.render());

		//
		// Invoke the rerender lifecycle hook.
		//
		this.rendered();
	}

	/**
	 * Returns a boolean value determining if the component is mounted.
	 *
	 * @returns {boolean} True if mounted.
	 *
	 * @example
	 *
	 * const Example = new class extends Component {
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
	 * Invoked when the component is created.
	 *
	 * @example
	 *
	 * const Example = new class extends Component {
	 *     created() {
	 *         console.log("The component was created.");
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	created () {}

	/**
	 * Invoked before the component is assigning props.
	 *
	 * @param {object} props The new component props
	 *
	 * @returns {object} The modified props object
	 *
	 * @example
	 *
	 * const Example = new class extends Component {
	 *     receiving(props) {
	 *         return {
	 *             text: "New value"
	 *         }
	 *     }
	 *     render() {
	 *         return `
	 *             <h1>${this.props.text}
	 *         `;
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"), {
	 *     text: "Passed value"
	 * });
	 */
	receiving (props) { return props; }

	/**
	 * Invoked after the component is assigned props.
	 *
	 * @param {object} props The new component props
	 *
	 * @example
	 *
	 * const Example = new class extends Component {
	 *     received(props) {
	 *         console.log("The component received props.");
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"), {
	 *     name: "Combo"
	 * });
	 */
	received (props) {}

	/**
	 * Invoked before the mount process. Can be used to stop it.
	 *
	 * @returns {boolean} True If the component should mount.
	 *
	 * @example
	 *
	 * const Example = new class extends Component {
	 *     canMount() {
	 *         return false;
	 *     }
	 *     render() {
	 *         return `
	 *             <p>This component won't be mounted.</p>
	 *         `;
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	canMount (el, props = {}) { return true; }

	/**
	 * Invoked before the component is mounted.
	 *
	 * @example
	 *
	 * const Example = new class extends Component {
	 *     mounting() {
	 *         console.log("The component will mount.");
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	mounting () {}

	/**
	 * Invoked after the component is mounted.
	 *
	 * @example
	 *
	 * const Example = new class extends Component {
	 *     mounted() {
	 *         console.log("The component has mounted.");
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	mounted () {}

	/**
	 * Invoked before the unmount process. Can be used to stop it.
	 *
	 * @returns {boolean} True If the component should unmount.
	 *
	 * @example
	 *
	 * const Example = new class extends Component {
	 *     mounted() {
	 *         this.unmount();
	 *     }
	 *     canUnmount() {
	 *         return false;
	 *     }
	 *     render() {
	 *         return `
	 *             <p>This component won't be unmounted.</p>
	 *         `;
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	canUnmount () { return true; }

	/**
	 * Invoked before the component is unmounted.
	 *
	 * @example
	 *
	 * const Example = new class extends Component {
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
	unmounting () {}

	/**
	 * Invoked after the component was unmounted.
	 *
	 * @example
	 *
	 * const Example = new class extends Component {
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
	 * Invoked before the update process.
	 *
	 * @param {object} newState The new state
	 *
	 * @returns {boolean} True If the component should update.
	 *
	 * @example
	 *
	 * const Example = new class extends Component {
	 *     created() {
	 *         this.update({});
	 *     }
	 *     canUpdate() {
	 *         return false;
	 *     }
	 *     updating(prev) {
	 *         console.log("This life cycle method will never fire.");
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	canUpdate (newState) { return true; }

	/**
	 * Invoked before the component is updated.
	 *
	 * @param {object} prev The previous component state
	 *
	 * @example
	 *
	 * const Example = new class extends Component {
	 *     created() {
	 *         this.update({});
	 *     }
	 *     updating(prev) {
	 *         console.log("The component will update.");
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	updating (prev) {}

	/**
	 * Invoked after the component was updated.
	 *
	 * @param {object} prev The previous component state
	 *
	 * @example
	 *
	 * const Example = new class extends Component {
	 *     created() {
	 *         this.update({});
	 *     }
	 *     updated(prev) {
	 *         console.log("The component was updated.");
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	updated (prev) {}

	/**
	 * Invoked after the component was rendered.
	 *
	 * @example
	 *
	 * const Example = new class extends Component {
	 *     rendered() {
	 *         console.log("The component was rendered.");
	 *     }
	 * }();
	 *
	 * Example.mount(document.getElementById("root"));
	 */
	rendered() {}
}


