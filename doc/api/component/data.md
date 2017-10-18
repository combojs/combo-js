# Component.data

An object that contains data specific to the component.

## Usage

Component.data

## Example

	var Greeting = new Combo.Component({
		created: function() {
			this.update({
				name: "World"
			});
		},
		render: function() {
			return `
				<div>Hello ${this.data.name}</div>
			`;
		}
	});

	Greeting.mount(document.getElementById("root"));