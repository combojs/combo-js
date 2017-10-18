# Component.unmount

Unmount the component from its container element.

## Usage

Component.unmount([remove])

| Param           | Type          | Details                       |
| --------------- | ------------- | ----------------------------- |
| remove          | `boolean`     | Remove the HTML.              |

## Example

	var Greeting = new Combo.Component({
		unmounted: function() {
			console.log("The component was unmounted.");
		},
		render: function() {
			return `
				<div>Hello World</div>
			`;
		}
	});

	Greeting.mount(document.getElementById("root"));

	Greeting.unmount();
	