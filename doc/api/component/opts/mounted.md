# Component.mounted

Called when the instance gets mounted to an element.

## Usage

Component.mounted

## Example

	var Message = new Combo.Component({
		mounted: function() {
			console.log("The instance was mounted.");
		},
		render: function() {
			return `<div>Hello Combo</div>`;
		}
	});

	Combo.mount("root", Message);
