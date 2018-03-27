# Frequently Asked Questions

**Ajax**

- [How do I populate data using AJAX?](#how-do-i-populate-data-using-ajax)

**Components**

- [Where do I mount a child component?](#where-do-i-mount-a-child-component)
- [Do I need to mount all child components?](#do-i-need-to-mount-all-child-components)
- [How do I map an event to a custom method?](#how-do-i-map-an-event-to-a-custom-method)

**Data**

- [How do I define default component data?](#how-do-i-define-default-component-data)
- [How do I pass data to a parent component?](#how-do-i-pass-data-to-a-parent-component)
- [How do I pass data to a child component?](#how-do-i-pass-data-to-a-child-component)
- [How do I pass data to an unmounted component?](#how-do-i-pass-data-to-an-unmounted-component)
- [How do I store data passed in the render method?](#how-do-i-store-data-passed-in-the-render-method)

### How do I populate data using AJAX?

Make the request inside the `mounted` lifecycle method.

	var Foo = new class extends Combo.Component {
		created() {
			this.update({
				text: ""
			});
		}
		mounted() {
			window.fetch(this.data.url)
				.then((response) => {
					return response.text();
				})
				.then((text) => {
					this.update({
						text: text
					})
				});
		}
		render() {
			return `
				${this.data.text}
			`;
		}
	}();

	Foo.mount(document.getElementById("root"), {
		url: "bar.html"
	});


### Where do I mount a child component?

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


### How do I define default component data?

Default data is defined in the `created` lifecycle method.

    var Foo = new class extends Combo.Component {
        created() {
            this.update({
                name: "Foo"
            });
        }
        render() {
            return `
                <div>${this.data.name}</div>
            `;
        }
    }();

    Foo.mount(document.getElementById("root"));

### How do I pass data to a parent component?

Data is passed through the component's `mount` method.

    var Foo = new class extends Combo.Component {
        render() {
            return `
                <div>Hello ${this.data.name}</div>
            `;
        }
    }();

    Foo.mount(document.getElementById("root"), {
        name: "Foo"
    });

### How do I pass data to a child component?

Data is passed to child components the same way.

    var Foo = new class extends Combo.Component {
        mounted() {
            Bar.mount(this.el.querySelector(".foo__bar"), {
                name: this.data.name
            });
        }
        render() {
            return `
                <div class="foo__bar"></div>
            `;
        }
    }();

    var Bar = new class extends Combo.Component {
        render() {
            return `
                <div>Hello ${this.data.name} Bar</div>
            `;
        }
    }();

    Foo.mount(document.getElementById("root"), {
        name: "Foo"
    });

### How do I pass data to an unmounted component?

Data can be passed through a component's `render` method.

    var Foo = new class extends Combo.Component {
        render() {
            return `
                <div>
                	${Bar.render({name: this.data.name})}
                </div>
            `;
        }
    }();

    var Bar = new class extends Combo.Component {
        render(props) {
            return `
                <div>${props.name} Bar</div>
            `;
        }
    }();

    Foo.mount(document.getElementById("root"), {
        name: "Foo"
    });

### How do I store data passed in the render method?

Simply use the `update` method.

    var Foo = new class extends Combo.Component {
        render() {
            return `
                <div>
                	${Bar.render({name: this.data.name})}
                </div>
            `;
        }
    }();

    var Bar = new class extends Combo.Component {
        render(props) {
        	this.update({
        		name: props.name
        	});

            return `
            	<div>${this.data.name} Bar</div>
            `;
        }
    }();

    Foo.mount(document.getElementById("root"), {
        name: "Foo"
    });
