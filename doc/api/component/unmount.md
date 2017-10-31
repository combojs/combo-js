# Component.unmount

Unmount the component from its container element.

## Usage

Component.unmount([remove])

| Param           | Type          | Details                       |
| --------------- | ------------- | ----------------------------- |
| remove          | `boolean`     | Remove the HTML.              |

## Example

    var Message = new Combo.Component({
        close: function() {
            this.unmount(true);
        },  
        render: function() {
            let me = this.ref;

            return `
                <div class="message">
                    <div class="message-header">
                        Important
                        <button onclick="${me}.close()" class="delete is-large" aria-label="delete"/>
                    </div>
                    <div class="message-body">
                        ${this.data.message}
                    </div>
                </div>
            `;
        }, 
    });

    Message.mount(document.getElementById("root"), {
        message: "Classes will be cancelled today due to inclement weather."
    });

[View on CodePen](https://codepen.io/combojs/pen/rYadby?editors=0110)
