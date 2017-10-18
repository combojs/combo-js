# Component.unmounted

Invoked after the component is unmounted.

## Usage

Component.unmounted

## Example

	var Greeting = new Combo.Component({
		unmounted: function() {
			console.log("The component was unmounted.");
		},
		render: function() {
			return `
				<div>Hello World</div>
			`;
		}
	});

	Greeting.mount(document.getElementById("root"));

	Greeting.unmount();