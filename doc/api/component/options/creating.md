# Component.creating

Invoked before the component is created.

## Usage

Component.creating

## Example

	var Greeting = new Combo.Component({
		creating: function() {
			console.log("The component is about to be created.");
		},
		render: function() {
			return `
				<div>Hello World</div>
			`;
		}
	});

	Greeting.mount(document.getElementById("root"));

