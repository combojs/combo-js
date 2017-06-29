# Children

    
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
                   ${ItemComponent.render("Item 1")}
                   ${ItemComponent.render("Item 2")}
                   ${ItemComponent.render("Item 3")}
                </ul>
            `;
        }
    }();
    
    var ItemComponent = new class extends Combo.Component {
        render(text) {
            return `
                <li>${text}</li>
            `;
        }
    }();
    
    Combo.render(document.getElementById("container"), ListComponent.render()); 