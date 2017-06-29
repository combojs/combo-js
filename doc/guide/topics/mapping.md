
# Mapping

    var ListComponent = new class extends Combo.Component {
        constructor() {
            super();
            
            this.update({
                title: "List Example"
            });        
        }
        render() {
            let data = Combo.map(this.props.links, (item) => {
              return ItemComponent.render(item);
            });
          
            return `
                <h1>${this.props.title}</h1>
                <ul>
                   ${data}
                </ul>
            `;
        }
    }();
    
    var ItemComponent = new class extends Combo.Component {
        prompt(text) {
          alert(text);
        }
        render(text) {
            return ` 
                <li onclick="ItemComponent.prompt('${text}')">${text}</li> 
            `;
        }
    }();
    
    ListComponent.update({
      links: ["Item 1", "Item 2", "Item 3"]
    });

    Combo.render(document.getElementById("container"), ListComponent.render());      