# Component.el

Returns the element the instance is mounted to.

----------------------------------------------------------------------

## Usage

Component.el

### Returns

`Object` The element.

----------------------------------------------------------------------

## Example

	var Message = Combo.Component.extend({
		mounted: function() {
			this.el.addEventListener("click", function() {
				alert("Hello Combo.")
			});
		},
		render: function() {
			return `<div>Click me for a message.</div>`;
		}
	});

	Combo.mount("root", Message);
