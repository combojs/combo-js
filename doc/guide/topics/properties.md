# Properties

    var ListComponent = new class extends Combo.Component {
        render() {
            return `
                <h1>${this.props.title}</h1>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            `;
        }
    }();
    
    ListComponent.update({
        title: "List Example"
    });
    
    Combo.render(document.getElementById("container"), ListComponent.render()); 