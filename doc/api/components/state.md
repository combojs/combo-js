# Component.state

An object that contains data specific to this component. 

----------------------------------------------------------------------

## Usage

Component.state

### Returns

`Object` The component's state.

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