# Component.mounted

Invoked after the component is mounted.

## Usage

Component.mounted

## Example

	var Greeting = new Combo.Component({
		mounted: function() {
			console.log("The component was mounted.");
		},
		render: function() {
			return `
				<div>Hello World</div>
			`;
		}
	});

	Greeting.mount(document.getElementById("root"));