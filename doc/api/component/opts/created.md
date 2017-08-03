# Component.created

 Called when the instance is created.

## Usage

Component.created

## Example

	var Message = new Combo.Component({
		created: function() {
			console.log("The instance was created.");
		},
		render: function() {
			return `<div>Hello Combo</div>`;
		}
	});

	Message.mount(document.getElementById("root"));

