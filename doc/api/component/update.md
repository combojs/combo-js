# Component.update

Update the properties from an object containing the new values. 

----------------------------------------------------------------------

## Usage

Component.update(values)

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| values          | `Object`      | The values.                      |

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