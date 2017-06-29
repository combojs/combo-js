# Component.props

An object containing the component's properties.

----------------------------------------------------------------------

## Usage

Component.props

----------------------------------------------------------------------

## Example

    var Header = new class extends Combo.Component {
        render() {
            return `
                <header>
                    <h1>${this.props.title}</h1>
                </header>
            `;
        }
    }();
    
    Header.update({
        title: "Combo"
    });

    Combo.render(document.getElementById("main"), Header.render());