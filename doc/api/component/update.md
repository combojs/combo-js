# Component.update

Update the data, then redraw the component if it's mounted.

## Usage

Component.update(values)

| Param           | Type          | Details                       |
| --------------- | ------------- | ----------------------------- |
| values          | `Object`      | The data.                     |

## Example

	var Timer = new Combo.Component({
		created: function() {
			this.update({
				tick: 0
			});
		},
		mounted: function() {
			setInterval(()=> {
				this.update({
					tick: this.data.tick + 1
				});
			}, 1000);
		},
		render: function() {
			return `
				<div class="box">
					${this.data.tick} seconds elapsed.
				</div>
			`;
		}
	});

	Timer.mount(document.getElementById("root"));

[View on CodePen](https://codepen.io/combojs/pen/bYdYdK?editors=0010)