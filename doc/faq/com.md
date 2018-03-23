# Components

### How do I mount a child component?

Mount child components inside the `mounted` lifecycle method.

	var Foo = new class extends Combo.Component {
		mounted() {
			Bar.mount(this.el.querySelector(".foo__bar"), {
				name: this.data.name
			});
		}
		render() {
			return `
				<div>
					Foo <span class="foo__bar"></span>
				</div>
			`;
		}
	}();

	var Bar = new class extends Combo.Component {
		render() {
			return `
				Bar
			`;
		}
	}();

	Foo.mount(document.getElementById("root"));

### Do I need to mount all child components?

No. If a child relies on a parent to be redrawn, render them.

	var Foo = new class extends Combo.Component {
		render() {
			return `
				<div>
					Foo ${Bar.render()}
				</div>
			`;
		}
	}();

	var Bar = new class extends Combo.Component {
		render(props) {
			return `
				Bar
			`;
		}
	}();

	Foo.mount(document.getElementById("root"));

### How do I map an event to a custom method?

**Method 1**

Pass a reference variable to the name of the component.

	var Foo = new class extends Combo.Component {
		_click() {
			alert("Foo was clicked.");
		}
		render() {
			return `
				<button onclick="${this.data.ref}._click()">
					Foo
				</button>
			`;
		}
	}();

	Foo.mount(document.getElementById("root"), {
		ref: "Foo"
	});

> Webpack users must export the component to their globals.

**Method 2**

Define an event listener inside the `mounted` lifecycle method.

	var Foo = new class extends Combo.Component {
		mounted() {
			this.el.querySelector(".foo__btn").addEventListener("click",
				() => {
					this._click();
				}
			);
		}
		_click() {
			alert("Foo was clicked.");
		}
		render() {
			return `
				<button class="foo__btn">
					Foo
				</button>
			`;
		}
	}();

	Foo.mount(document.getElementById("root"));


