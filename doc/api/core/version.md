# Combo.version

Returns the current version number.

## Usage

Combo.version

### Returns 

`string` The version number.

## Example
            
    var Version = new class extends Combo.Component {
        render() {
            return `
                <div>Version: ${Combo.version}.</div>
            `;
        }
    }();

    Version.mount(document.getElementById("root"));