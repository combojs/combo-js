# Component.update

Update the component's data, then redraw the component if it's mounted.

## Usage

Component.update([data])

| Param           | Type          | Details                       |
| --------------- | ------------- | ----------------------------- |
| [data]          | `Object`      | The data.                     |

## Example

	var Timer = new class extends Combo.Component {
		created() {
			this.update({
				tick: 0
			});
		}
		mounted() {
			setInterval(() => {
				this.update({
					tick: this.data.tick + 1
				});
			}, 1000);
		}
		render() {
			return `
				<div>${this.data.tick} seconds elapsed.</div>
			`;
		}
	}();

    Timer.mount(document.getElementById("root"));