# Component.update

Update the data, then redraw the component if it's mounted.

## Usage

Component.update(values)

| Param           | Type          | Details                       |
| --------------- | ------------- | ----------------------------- |
| values          | `Object`      | The data.                     |

## Example

	var Greeting = new Combo.Component({
		created: function() {
			this.update({
				name: "World"
			});
		},
		render: function() {
			return `
				<div>Hello ${this.data.name}</div>
			`;
		}
	});

	Greeting.mount(document.getElementById("root"));

	Greeting.update({
		name: "Combo"
	});
	