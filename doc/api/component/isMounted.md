# Component.isMounted

Determines if the instance is mounted.

## Usage

Component.isMounted

### Returns

`boolean` True if the instance is mounted.

## Example

	var Message = Combo.Component.extend({
		render: function() {
			return `<div>Hello Combo</div>`;
		}
	});

	Combo.mount("root", Message);

	console.log(Message.isMounted);