# Component.updating

Invoked before the component is updated.

## Usage

Component.updating

## Example

	var Greeting = new Combo.Component({
		created: function() {
			this.update({
				name: "World"
			});
		},
		updating: function() {
			console.log("The component is about to be updated.");
		},
		render: function() {
			return `
				<div>Hello ${this.data.name}</div>
			`;
		}
	});

	Greeting.mount(document.getElementById("root"));