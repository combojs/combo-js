# Component.beforeMount

Called before the instance is mounted to an element.

## Usage

Component.beforeMount

## Example

	var Message = new Combo.Component({
		beforeMount: function() {
			console.log("The instance is about to be mounted.");
		},
		render: function() {
			return `<div>Hello Combo</div>`;
		}
	});

	Message.mount(document.getElementById("root"));

