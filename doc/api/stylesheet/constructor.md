# Stylesheet.constructor

The constructor function.

## Usage

Stylesheet([styles = {}])

### Params

| Param             | Type        | Details                          |
| ----------------- | ----------- | -------------------------------- |
| styles            | `Object`    | The styles.                      |

## Example

	var Greeting = new Combo.Component({
		render: function() {
			return `
				<div style="${GreetingStyles.message}">Hello Combo.</div>
			`;
		}
	});

	var GreetingStyles = new Combo.Stylesheet({
		message: {
			"padding": "4em",
			"color": "#fff",
			"background-color": "#222"
		}
	});

	Greeting.mount(document.getElementById("root"));