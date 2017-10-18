# Component.el

Returns the element the instance is mounted to.

## Usage

Component.el

### Returns

`Object` The element.

## Example

	var Message = new Combo.Component({
		created: function() {
			this.update({
				text: "Click Me"
			});
		},
		mounted: function() {
			this.el.addEventListener("click", ()=> {
				this.update({
					text: "Hello World"
				});
			});
		},
		render: function() {
			return `
				<div>${this.data.text}</div>
			`;
		}
	});

	Message.mount(document.getElementById("root"));
