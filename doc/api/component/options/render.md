# Component.render

Invoked when a component is mounted or updated.

## Usage

Component.render

### Returns

`string` A [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) containing the markup.

## Example

	var Greeting = new Combo.Component({
		render: function() {
			return `
				<div>Hello World</div>
			`;
		}
	});

	Greeting.mount(document.getElementById("root"));

## Notes

The render method of another component can be called in the return string.

	var Greeting = new Combo.Component({
		render: function() {
			return `
				<div>Hello ${Thing.render()}</div>
			`;
		}
	});

	var Thing = new Combo.Component({
		render: function() {
			return `
				<strong>World</strong>
			`;
		}
	});

	Greeting.mount(document.getElementById("root"));
