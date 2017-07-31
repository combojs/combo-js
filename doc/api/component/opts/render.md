# Component.render

Returns a template literal containing the instance's markup.

## Usage

Component.render()

### Returns

`string` The template literal containing the markup.

## Example

	var Message = new Combo.Component({
		render: function() {
			return `<div>Hello Combo`;
		}
	});

	Combo.mount("root", Message);
