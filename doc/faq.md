# Frequently Asked Questions

### Table of Contents

- [Components](#data)
- [Data](#data)

## Components

### Where do I mount child components?

Inside the `mounted` lifecycle method.

	var Foo = new class extends Combo.Component {
		mounted() {
			Bar.mount(document.getElementById("bar"));
		}
		render() {
			return `
				Foo <div id="bar"></div>
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

## Data

### Where do I define default data?

Inside the `created` lifecycle method.

	var Foo = new class extends Combo.Component {
		created() {
			this.update({
				name: "Bar"
			});
		}
		render() {
			return `
				Foo ${this.data.name}
			`;
		}
	}();

	Foo.mount(document.getElementById("root"));

### How do I loop through a list?

Use the `map` method of the Array object.

	var Foo = new class extends Combo.Component {
        _items() {
            return this.data.names.map((item) => {
                return `
                    <li>${item}</li>
                `;
            }).join("");
        }
		render() {
			return `
                <ul>
                    ${this._items()}
                </ul>
			`;
		}
	}();

    Foo.mount(document.getElementById("root"), {
        name: [
            "Foo",
            "Bar"
        ]
    });
