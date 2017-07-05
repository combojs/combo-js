# Component.root

A string that contains the ID of the root element. This is usually the parent.
		
----------------------------------------------------------------------

## Usage

Component.root

### Returns

`string` The root ID.

----------------------------------------------------------------------

## Example

	<div id="container"></div>

	<script>
		var Hello = new class extends Combo.Component {
			render() {
				return `
					<h1>Hello</h1>
				`;
			}
		}("container");

		Combo.render(Hello);
	</script>