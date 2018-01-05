# Component.mount

Mounts the component to a container element and optionally update its data. 

## Usage

Component.mount(el, [data])

| Param           | Type          | Details                       |
| --------------- | ------------- | ----------------------------- |
| el              | `HTMLElement` | The container element.        |
| [data]          | `Object`      | The data.                     |

## Example
            
    var Fruit = new class extends Combo.Component {
        _items() {
            return this.data.items.map((item) => {
                return `
                    <li>${item}</li>
                `;
            }).join("");
        }
        render() {
            return `
                <ul>
                    ${this._items()}
                </ul>
            `;
        }
    }();

    Fruit.mount(document.getElementById("root"), {
        items: [
            "Apple",
            "Orange",
            "Bannana"
        ]
    });
