# Tutorial

The purpose of this tutorial is to demonstrate the key concepts in creating Combo components.

## Rendering

    var list = `
        <h1>Title</h1>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    `;
    
    Combo.render(document.getElementById("container"), list);

## Components

    var ListComponent = new class extends Combo.Component {
        render() {
            return `
                <h1>Title</h1>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            `;
        }
    }();
    
    Combo.render(document.getElementById("container"), ListComponent.render());

## Properties

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
    
## Defaults

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
    
## Children

    
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
    
# Events

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
        prompt(text) {
          alert(text);
        }
        render(text) {
            return `
                <li onclick="ItemComponent.prompt('${text}')">${text}</li> 
            `;
        }
    }();
    
    Combo.render(document.getElementById("container"), ListComponent.render());  
    
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