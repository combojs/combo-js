# Component.mount

Mount the component to a container element.

## Usage

Component.mount(el, [props])

| Param           | Type          | Details                       |
| --------------- | ------------- | ----------------------------- |
| el              | `HTMLElement` | The container element.        |
| [props]         | `Object`      | The props.                    |

## Example

	var Greeting = new Combo.Component({
		render: function() {
			return `
				<div>Hello World</div>
			`;
		}
	});

	Greeting.mount(document.getElementById("root"));

## Notes

Child components do not need to be mounted, unless they need to be updated independently from their parent.

[See Render Example](options/render.md)

