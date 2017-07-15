# Component.created

 Called when the instance is created.

 ----------------------------------------------------------------------

## Usage

Component.created

----------------------------------------------------------------------

## Example

	var Message = Combo.Component.extend({
		created: function() {
			console.log("The instance was created.");
		},
		render: function() {
			return `<div>Hello Combo</div>`;
		}
	});

	Combo.mount("root", Message);
