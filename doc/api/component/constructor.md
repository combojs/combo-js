# Component.constructor

The constructor function.

## Usage

Component([options = {}])

### Params

| Param             | Type        | Details                          |
| ----------------- | ----------- | -------------------------------- |
| options           | `Object`    | The options.                     |

## Example

	var Message = new Combo.Component({
		render: function() {
			return `<div>Hello Combo.</div>`;
		}
	});

	
	Message.mount(document.getElementById("root"));