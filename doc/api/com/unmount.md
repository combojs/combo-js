# Component.unmount

Unmount the component from its container element.

## Usage

Component.unmount([remove])

| Param           | Type          | Details                       |
| --------------- | ------------- | ----------------------------- |
| [remove]        | `boolean`     | Remove the HTML.              |

## Example

    var Message = new class extends Combo.Component {
        _close() {
            this.unmount(true);
        }
        render() {
            return `
                <p>
                    ${this.data.text}
                    <button onclick="${this.ref}._close()">Close</button>
                </p>
            `;
        }
    }();

    Message.mount(document.getElementById("root"), {
        text: "Classes will be cancelled today due to inclement weather."
    });
