# Component.created

Invoked after the component is created.

## Usage

Component.created

## Example

	var Greeting = new Combo.Component({
		created: function() {
			console.log("The component was created.");
		},
		render: function() {
			return `
				<div>Hello World</div>
			`;
		}
	});

	Greeting.mount(document.getElementById("root"));