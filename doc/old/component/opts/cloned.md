# Component.cloned

Called when the instance gets cloned.

## Usage

Component.mounted

## Example

	var Message = new Combo.Component({
		cloned: function() {
			console.log("The component was cloned.");
		}
	});

	var Message2 = Message.clone();

