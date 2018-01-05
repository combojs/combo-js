# Mounting

## Where do I mount a child component?

Inside the `mounted` lifecycle method.

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

## Do I need to mount all child components?
   
No. If a component doesn't redraw itself, it doesn't need to be mounted.

    var Foo = new class extends Combo.Component {
        render() {
            return `
                Foo ${Bar.render()}
            `;
        }
    }();

    var Bar = new class extends Combo.Component {
        render(name) {
            return `
               Bar
            `;
        }
    }();   