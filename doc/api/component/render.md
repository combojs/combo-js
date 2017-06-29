# Component.render

Render a [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) containing the component's markup.

----------------------------------------------------------------------

## Usage

Component.render() 

### Returns

`string` A template literal.

----------------------------------------------------------------------

## Example

	var Header = new class extends Combo.Component {
		render() {
			return `
				<header>
					<h1>Combo</h1>
				</header>
			`;
		}
	}();

	Combo.render(document.getElementById("main"), Header.render());