# Component.update

Update the data, then redraw the component if it's mounted.

----------------------------------------------------------------------

## Usage

Component.update(values)

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
