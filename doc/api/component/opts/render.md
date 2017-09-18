# Component.render

Returns a template literal containing the instance's markup.

## Usage

Component.render([params])

### Params

| Param           | Type          | Details                            |
| --------------- | ------------- | ---------------------------------- |
| params          | `Object`      | An object containing optional data |

### Returns

`string` The template literal containing the markup.

## Example

	var Message = new Combo.Component({
		render: function() {
			return `
				<div>Hello World</div>
			`;
		}
	});

	Message.mount(document.getElementById("root"));


