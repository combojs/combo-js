# Component.mount

Attach a component to a container element. 

## Usage

Component.mount(el, [props])

### Params

| Param           | Type          | Details                       |
| --------------- | ------------- | ----------------------------- |
| el              | `HTMLElement` | The container element.        |
| [props]         | `*`           | Optional data to pass.        |

### Notes

> Child components do not need to be mounted, unless they need to be updated independently from their parent.

## Example

	var Message = new Combo.Component({
		render: function(props) {
			return `
				<div>Hello ${props.title}</div>
			`;
		}
	});

	Message.mount(document.getElementById("root"), {
		name: "World"
	});
