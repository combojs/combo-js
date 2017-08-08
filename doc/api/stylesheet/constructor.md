# Stylesheet.constructor

The constructor function.

## Usage

Stylesheet([styles = {}])

### Params

| Param             | Type        | Details                          |
| ----------------- | ----------- | -------------------------------- |
| styles            | `Object`    | The styles.                      |

## Example

	var Message = new Combo.Component({
		render: function() {
			return `
				<div style="${MessageStyles.message}">Hello Combo.</div>
			`;
		}
	});

	var MessageStyles = new Combo.Stylesheet({
		message: {
			"padding": "4em",
			"color": "#fff",
			"background-color": "#222"
		}
	});

	Message.mount(document.getElementById("root"));