# Component.updated

Called when the instance's data is updated.

## Usage

Component.updated

## Example

	var Message = Combo.Component.extend({
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

	Combo.mount("root", Message);
