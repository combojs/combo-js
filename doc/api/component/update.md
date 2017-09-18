# Component.update

Update the data, then redraw the component if it's mounted.

## Usage

Component.update(values)

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


