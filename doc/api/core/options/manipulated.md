# Combo.manipulated

Invoked after the DOM was manipulated.

## Usage

Component.manipulated

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
	
	Combo.manipulated = function() {
		console.log("The DOM was manipulated");
	}

	Greeting.mount(document.getElementById("root"));