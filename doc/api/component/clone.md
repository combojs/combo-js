# Component.clone

Returns a new instance of the component.

## Usage

Component.clone();

### Returns

`Object` The new instance.

## Example

	var Greeting = new Combo.Component({
		render: function() {
			return `
				<div>Hello World</div>
			`;
		}
	});

	var Salutation = Greeting.clone();

	Salutation.mount(document.getElementById("root"));
