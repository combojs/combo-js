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
        var Hello = new class extends Combo.Component {
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

        Combo.render(Hello);
        Combo.render(Hello);
        Combo.render(Hello);
        
    </script>