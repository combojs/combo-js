# Component.data

An object that contains data specific to this component.

## Usage

Component.data

## Example

	var Message = new Combo.Component({
		created: function() {
			this.update({
				text: "Hello World"
			});
		},
		updated: function() {
			console.log("The component was updated.");
		},
		render: function() {
			return `
				<div>${this.data.text}</div>
			`;
		}
	});

	Message.mount(document.getElementById("root"));