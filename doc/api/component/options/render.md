# Component.render

Invoked when a component is mounted or updated. It can also be called manually from another component.

## Usage

Component.render()

### Returns

`string` The HTML to be written to the page.

## Example

	var Greeting = new Combo.Component({
		render: function() {
			return `
				<div class="box">
					Hello ${this.data.name}
				</div>
			`;
		}
	})

	Greeting.mount(document.getElementById("root"), {
		name: "Combo"
	});

[View on CodePen](https://codepen.io/combojs/pen/NwPzJL)
