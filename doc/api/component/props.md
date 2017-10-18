# Component.props

An object that contains data that was passed when the component was mounted. 

## Usage

Component.props

## Example

	var Greeting = new Combo.Component({
		render: function() {
			return `
				<div>Hello ${this.props.name}</div>
			`;
		}
	});

	Greeting.mount(document.getElementById("root"), {
		name: "World"
	});