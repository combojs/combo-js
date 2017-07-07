# Component.update

Update the component's state, then redraw the component if the root was defined. 

----------------------------------------------------------------------

## Usage

Component.update([values])

### Params

| Param               | Type      | Details                          |
| ------------------- | --------- | -------------------------------- |
| values (_optional_) | `Object`  | A object containing the values.  |


----------------------------------------------------------------------

## Example

	<div id="container"></div>

	<script>
		var Counter = new class extends Combo.Component {
			constructor(root) {
				super(root);
				this.state.times = 0;
			}
			render() {
				this.state.times += 1;
				return `
					<h1>Times updated: ${this.state.times}</h1>
				`;
			}
		}("container");

		Combo.render(Counter);
		Combo.render(Counter);
		Combo.render(Counter);
		
	</script>