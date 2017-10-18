# Component.unmounting

Invoked before the component is unmounted.

## Usage

Component.unmounting

## Example

	var Greeting = new Combo.Component({
		unmounted: function() {
			console.log("The component is about to be unmounted.");
		},
		render: function() {
			return `
				<div>Hello World</div>
			`;
		}
	});

	Greeting.mount(document.getElementById("root"));
	
	Greeting.unmount();