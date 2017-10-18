# Component.cloned

Invoked after the component is cloned.

## Usage

Component.cloned

### Example

	var Greeting = new Combo.Component({
		cloned: function() {
			console.log("The component was cloned.");
		}
		render: function() {
			return `
				<div>Hello World</div>
			`;
		}
	});

	var Salutation = Greeting.clone();

	Salutation.mount(document.getElementById("root"));