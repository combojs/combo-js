# Component.ref

Returns the variable name a component is assigned to. 

## Usage

Component.ref

### Returns 

`string` The variable name.

## Example

	var Greeting1 = new Combo.Component({
		greet: function() {
			console.log("Hello, from " + this.ref);
		},
		render: function() {
			return `
				<button onclick="${this.ref}.greet()">Hello</button>
			`;
		}
	});

    var Greeting2 = Greeting1.clone();

    Greeting2.mount(document.getElementById("root"));
