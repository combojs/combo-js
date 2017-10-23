# Component.mount

Mount the component to a container element.

## Usage

Component.mount(el, [data])

| Param           | Type          | Details                       |
| --------------- | ------------- | ----------------------------- |
| el              | `HTMLElement` | The container element.        |
| [data]          | `Object`      | The data.                     |
 
## Example

	var Greeting = new Combo.Component({
		render: function() {
			return `
				<div>Hello ${this.data.name}</div>
			`;
		}
	});

	Greeting.mount(document.getElementById("root"), {
		name: "World"	
	});

## Notes

Child components do not need to be mounted, unless they need to be updated independently from their parent.

[See Render Example](options/render.md)

