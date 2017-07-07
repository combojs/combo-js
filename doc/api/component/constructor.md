# Component Constructor

The constructor function.
		
----------------------------------------------------------------------

## Usage

Component([root])

### Params

| Param             | Type        | Details                          |
| ----------------- | ----------- | -------------------------------- |
| root (_optional_) | `string`    | The component's root ID.         |


----------------------------------------------------------------------

## Example

	<div id="container"></div>
	
	<script>
		var Layout = new class extends Combo.Component {
			render(props) {
				return `
					<div>Hello $props.name</div>
				`;		
			}
		}("container");

		Combo.render(Example, {name: "World"});
	</script>