# Component.updated

Invoked after the component is updated.

## Usage

Component.updated

	var Greeting = new Combo.Component({
		created: function() {
			this.update({
				name: "World"
			});
		},
		updated: function() {
			console.log("The component was updated.");
		},
		render: function() {
			return `
				<div>Hello ${this.data.name}</div>
			`;
		}
	});

	Greeting.mount(document.getElementById("root"));