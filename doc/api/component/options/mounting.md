# Component.mounting

Invoked before the component is mounted.

## Usage

Component.mounting

## Example

	var Greeting = new Combo.Component({
		mounting: function() {
			console.log("The component is about to be mounted.");
		},
		render: function() {
			return `
				<div>Hello World</div>
			`;
		}
	});

	Greeting.mount(document.getElementById("root"));