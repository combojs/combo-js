# Component.isMounted

Determines if the instance is mounted.

## Usage

Component.isMounted

### Returns

`boolean` True if the instance is mounted.

## Example

	var Message = new Combo.Component({
		render: function() {
			return `<div>Hello Combo</div>`;
		}
	});

	Message.mount(document.getElementById("root"));

	console.log(Message.isMounted);
