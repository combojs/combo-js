# Component.created

 Called when the instance is created.

## Usage

Component.created

## Example

	var Message = new Combo.Component({
		created: function() {
			this.update({
				text: "Hello World"
			});
		},
		render: function() {
			return `
				<div>${this.data.text}</div>
			`;
		}
	});

	Message.mount(document.getElementById("root"));

