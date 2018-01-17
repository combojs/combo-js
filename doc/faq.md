# Frequently Asked Questions

### Table of Contents

- [Data](#data)

## Data

### How do I define default data?

Use `update` inside the `created` lifecycle method.

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

### How do I loop through a list?

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
