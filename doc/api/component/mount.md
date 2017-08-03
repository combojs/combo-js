# Component.mount

Mount a component to a container element.

## Usage

Component.mount(el)

### Params

| Param           | Type          | Details                       |
| --------------- | ------------- | ----------------------------- |
| el              | `HTMLElement` | The container element.        |

## Example

	var Message = Combo.Component.extend({
		render: function() {
			return `<div>Hello Combo</div>`;
		}
	});

	Message.mount(document.getElementById("root"));
