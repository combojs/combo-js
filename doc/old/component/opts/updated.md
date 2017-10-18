# Component.updated

Called when the instance's data is updated.

## Usage

Component.updated

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