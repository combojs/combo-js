# Component.mount

Mount the component to a container element.

## Usage

Component.mount(el, [data])

| Param           | Type          | Details                       |
| --------------- | ------------- | ----------------------------- |
| el              | `HTMLElement` | The container element.        |
| [data]          | `Object`      | The optional data.            |

## Example

    var Tabs = new Combo.Component({
        render: function() {
            let tabs = this.data.tabs.map((item) => {
                return `
                    <li>
                        <a href="${item.url}">${item.text}</a>
                    </li>
                `;
            }).join("");

            return `
                <div class="tabs">
                    <ul>
                        ${tabs}
                    </ul>
                </div>
            `;
        }
    });

    Tabs.mount(document.getElementById("root"), {
        tabs: [
            {
                text: "Pictures",
                url: "#"
            },
            {
                text: "Music",
                url: "#"
            },              
            {
                text: "Videos",
                url: "#"
            }                      
        ]
    });

[View in CodePen](https://codepen.io/combojs/pen/EbaRNz)

