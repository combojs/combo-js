# Component.update

Update the component's state, then redraw the component if the root was defined. 

----------------------------------------------------------------------

## Usage

Component.update(values, [redraw])

### Params

| Param               | Type      | Details                          |
| ------------------- | --------- | -------------------------------- |
| values              | `Object`  | A object containing the values.  |
| redraw (_optional_) | `boolean` | Redraw the component.            |

> The redraw argument defaults to `true` if not specified.

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