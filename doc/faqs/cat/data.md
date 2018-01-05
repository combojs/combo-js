# Data

## Where do I define my default values?

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

## How do I iterate through a list?

Use the JavaScript `map` function.

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

## How do I pass data between components?

**mount()**

Ideal for unidirectional data flow.

	var Foo = new class extends Combo.Component {
		mounted() {
			Bar.mount(document.getElementById("bar"), {
				name: "Bar"
			});
		}
		render() {
			return `
				Foo <span id="bar"></span>
			`;
		}
	}();

	var Bar = new class extends Combo.Component {
		render() {
			return `
				${this.data.name}
			`;
		}
	}();

**update()**

Ideal for bidirectional data flow.

	var Foo = new class extends Combo.Component {
		mounted() {
			Bar.mount(document.getElementById("bar"));
		}
		render() {
			return `
				Foo <span id="bar"></span>
			`;
		}
	}();

	var Bar = new class extends Combo.Component {
		render() {
			return `
				${this.data.name}
			`;
		}
	}();

	Bar.update({
		name: "Bar";
	});

**render()**

Ideal for situations where you are not updating `data`.

    var Foo = new class extends Combo.Component {
        render() {
            return `
                Foo ${Bar.render("Bar")}
            `;
        }
    }();

    var Bar = new class extends Combo.Component {
        render(name) {
            return `
                ${name}
            `;
        }
    }();

