/**
 * Combo.js
 *
 * Copyright 2017-present, Eric Harms.
 *
 * The MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Combo;

(function (Combo) {

	"use strict";

// **mount**
//
// Mount a component to a container element.
//
Combo.mount = function(el, component, data) {

	// **remove**
	//
	// Remove the children of the container element.
	//
	function remove() {
		if(typeof component.el.firstChild !== "undefined") {
			while(component.el.firstChild) {
				component.el.removeChild(component.el.firstChild);
			}
		}
	}

	// **render**
	//
	// Render the component in the container element.
	//
	function render() {
		//
		// Invoke the component's mounted lifecycle hook.
		//
		if(typeof component.mounted === "function") {
			component.mounted();
		}
		//
		// Insert the HTML.
		//
		component.el.insertAdjacentHTML("beforeEnd", component.render(data));
	}

	component.el = document.getElementById(el);

	//
	// Ensure the component has a render method.
	//
	remove();
	render();
};

// ## Component
//
// Represents a component, view, or fragment.
//
Combo.Component = class {
	// **constructor**
	//
	// The constructor function.
	//
	constructor(options = {}) {
		//
		// Extend the properties from options.
		//
		Object.assign(this, options);

		//
		// Invoke the created lifecycle hook.
		//
		if(typeof this.created === "function") {
			this.created();
		}
	}

	// **extend**
	//
	// Return an instance of the component class.
	//
	static extend(options = {}) {
		return new this(options);
	}

	// **update**
	//
	// Update the data, then redraw the component if it's mounted.
	//
	update(values = {}) {
		this.data = Object.assign({}, this.data, values);

		//
		// Invoke the updated lifecycle hook.
		//
		if(typeof this.updated === "function") {
			this.updated();
		}

		//
		// Redraw the component if it's mounted.
		//
		if(this.isMounted()) {
			Combo.render(this.el, this);
		}
	}

	// **isMounted**
	//
	// Returns a boolean value determining if the component was mounted.
	//
	get isMounted() {
		return !!this.el;
	}
};

})(Combo || (Combo = {}));
