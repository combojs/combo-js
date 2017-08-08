# Component.Constructor

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
			return `<div>Hello Combo`;
		}
	});
	
	Message.mount(document.getElementById("root"));