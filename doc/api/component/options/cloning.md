# Component.cloning

Invoked before the component is cloned.

## Usage

Component.cloning

## Example

	var Greeting = new Combo.Component({
		cloning: function() {
			console.log("The component is about to be cloned.");
		},
		render: function() {
			return `
				<div>Hello World</div>
			`;
		}
	});

	var Salutation = Greeting.clone();

	Salutation.mount(document.getElementById("root"));