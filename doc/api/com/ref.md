# Component.ref

Returns the variable name a component was assigned to. 

## Usage

Component.ref

### Returns 

`string` The variable name.

## Example

    var Print = new class extends Combo.Component {
        _print() {
        	if(window.print) {
            	window.print();
            }
        }
        render() {
            return `
                <button onclick="${this.ref}._print()">Print</button>
            `;
        }
    }();

    Print.mount(document.getElementById("root"));
