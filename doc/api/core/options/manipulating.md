# Combo.manipulating

Invoked before the DOM was manipulated.

## Usage

Component.manipulating

### Params

| Param           | Type          | Details                       |
| --------------- | ------------- | ----------------------------- |
| el              | `HTMLElement` | The container element.        |


## Example

	var Greeting = new Combo.Component({
		render: function() {
			return `
				<div>Hello World</div>
			`;
		}
	});
	
	Combo.manipulating = function() {
		console.log("The DOM is about to be manipulated");
	}

	Greeting.mount(document.getElementById("root"));