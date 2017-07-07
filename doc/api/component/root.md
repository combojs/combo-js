# Component.root

A string that contains the ID of the root element. This is usually the parent.
		
----------------------------------------------------------------------

## Usage

Component.root

### Returns

`string` The root ID.

----------------------------------------------------------------------

## Example

## Example

	<div id="container"></div>
	
	<script>
		var Waldo = new class extends Combo.Component {
			render() {
				return `
					<h1>I'm finding in #${this.root}</h1>			
				`;		
			}
		}("container");

		Combo.render(Waldo);
	</script>