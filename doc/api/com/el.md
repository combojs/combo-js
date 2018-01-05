# Component.el

Returns the container element the component is mounted to.

## Usage

Component.el

### Returns

`HTMLElement` The container element.

## Example

	var Canvas = new class extends Combo.Component {
		mounted() {
			if(this.el.getContext) {
				this.context = this.el.getContext("2d");
			}
		}
		render() {
			return "The Canvas element is not supported by your browser."
		}
	}();

	Canvas.mount(document.getElementById("root"));

	Canvas.context.fillRect(0, 0, 50, 50);