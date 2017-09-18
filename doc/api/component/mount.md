# Component.mount

Attach a component to a container element. 

## Usage

Component.mount(el)

### Params

| Param           | Type          | Details                       |
| --------------- | ------------- | ----------------------------- |
| el              | `HTMLElement` | The container element.        |

### Notes

> Child components do not need to be mounted, unless they need to be updated independently from their parent.

## Example

	var Message = new Combo.Component({
		render: function() {
			return `
				<div>Hello World</div>
			`;
		}
	});

	Message.mount(document.getElementById("root"));
