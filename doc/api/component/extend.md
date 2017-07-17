# Component.extend

Returns a new instance of the Component class.

----------------------------------------------------------------------

## Usage

Component.extend([options = {}])

### Params

| Param             | Type        | Details                          |
| ----------------- | ----------- | -------------------------------- |
| options           | `Object`    | The options.                     |


----------------------------------------------------------------------

## Example

	var Message = Combo.Component.extend({
		render: function() {
			return `<div>Hello Combo</div>`;
		}
	});

	Combo.mount("root", Message);
