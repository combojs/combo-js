# Component.clone

Returns a new instance of the component.

## Usage

Component.clone();

### Params

| Param             | Type        | Details                          |
| ----------------- | ----------- | -------------------------------- |
| options           | `Object`    | The options.                     |

## Example

	var Message = new Combo.Component({
		cloned: function() {
			console.log("The instance was cloned.");
		},
		render: function() {
			return `
				<div>Hello Combo</div>
			`;
		}
	});

	var Message2 = Message.clone();
