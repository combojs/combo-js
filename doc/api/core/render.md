# Combo.render

Render a [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) inside a container element.

----------------------------------------------------------------------

## Usage

Combo.render(el, value) 

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| el              | `Object`      | The container element.           |
| value           | `string`      | The template literal.            |

----------------------------------------------------------------------

## Example

	const header = `
		<header>
			<h1>Combo</h1>
		</header>
	`;

	Combo.render(document.getElementById("main"), header);