# Combo.render

Render a component on the page. 

----------------------------------------------------------------------

## Usage

Combo.render(component, [props]) 

### Params

| Param              | Type          | Details                       |
| ---------------    | ------------- | ----------------------------- |
| component          | `Object`      | The component.                |
| props (_optional_) | `*`           | The properties.               |

----------------------------------------------------------------------

## Example

	<div id="container"></div>
	
	<script>
		var Fruits = new class extends Combo.Component {
			render() {
				return `
					<h1>Fruits</h1>
					<ul>
						<li>Apple</li>
						<li>Oranges</li>
						<li>Bananas</li>
					</ul>
				`;
			}
		}("container")

		Combo.render(Fruits);
	</script>