# Combo.render

Render a component on the page.

----------------------------------------------------------------------

## Usage

Combo.render(component) 

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| component       | `Object`      | The component.                   |

----------------------------------------------------------------------

## Example

	<div id="root"></div>
	
	<script>
		var Layout = new class extends Combo.Component {
			render() {
				return `
					${Header.render()}
					${Content.render()}
				`;		
			}
		}("root");

		var Header = new class extends Combo.Component {
			render() {
				return `
					<header>
						<h1>Header</h1>
					</header>
				`;
			}
		}();

		var Content = new class extends Combo.Component {
			render() {
				return `
					<main>
						<p>Content</p>
					</main>
				`;
			}
		}();

		Combo.render(Layout);
	</script>