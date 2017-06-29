# Defaults

    var ListComponent = new class extends Combo.Component {
        constructor() {
            super();
            
            this.update({
                title: "List Example"
            });        
        }
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
    
    Combo.render(document.getElementById("container"), ListComponent.render()); 