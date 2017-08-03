# Component.updated

Called when the instance's data is updated.

## Usage

Component.updated

## Example

	var Message = new Combo.Component({
		created: function() {
			this.update({
				name: "Combo"
			});
		},
		updated: function() {
			console.log("The instance was updated.");
		},
		render: function() {
			return `<div>Hello ${this.data.name}</div>`;
		}
	});

	Message.mount(document.getElementById("root"));

