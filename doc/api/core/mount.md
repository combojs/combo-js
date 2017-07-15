# Combo.mount

Mount a component to a container element.

----------------------------------------------------------------------

## Usage

Combo.mount(el, component, [data = {}])

### Params

| Param           | Type          | Details                       |
| --------------- | ------------- | ----------------------------- |
| el              | `string`      | The ID.                       |
| component       | `Object`      | The component.                |
| [data]          | `*`           | The data.                     |

----------------------------------------------------------------------

## Example

	var Message = Combo.Component.extend({
		render: function() {
			return `<div>Hello Combo</div>`;
		}
	});

	Combo.mount("root", Message);


----------------------------------------------------------------------

> ## Notes
>
> Not every instance needs to be mounted to an element. Parents redraw their
> children when they receive an update.
