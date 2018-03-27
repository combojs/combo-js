# Data

### Table of Contents

- [How do I define default component data?](#how-do-i-define-default-component-data)
- [How do I pass data to a parent component?](#how-do-i-pass-data-to-a-parent-component)
- [How do I pass data to a child component?](#how-do-i-pass-data-to-a-child-component)
- [How do I pass data to an unmounted component?](#how-do-i-pass-data-to-an-unmounted-component)
- [How do I store data passed in the render method?](#how-do-i-store-data-passed-in-the-render-method)

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
