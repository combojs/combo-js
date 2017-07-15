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

## Notes

In many cases, child components don't need to be mounted to an element.

	var Message = Combo.Component.extend({
		render: function() {
			return `<div>Hello ${Person.render()}</div>`;
		}
	});

	var Person = Combo.Component.extend({
		render: function() {
			return `Combo`; // Redrawn when Message gets an update().
		}
	});

	Combo.mount("root", Message);
