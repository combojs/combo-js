# Component.data

An object that contains data specific to this component.

----------------------------------------------------------------------

## Usage

Component.data

----------------------------------------------------------------------

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
