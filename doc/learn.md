# Learn Combo
 
 ## Components
 
Components in Combo extend the Component class. All components need a render function, which returns a template literal. This template literal contains the markup that will be written to the page.

    <script>
        var Editor = new class extends Combo.Component {
            render() {
                return `
                    <div contenteditable="true">
                    	<p>Edit the content by clicking here.</p>
                    </div>
                `;
            }
        }();
    </script>
    
## Container

To render this component and its child components on the page, we need to create a container element and tell the component to write it there. This is done by passing the container's ID to the constructor function, and calling Combo.render.
    
    <div id="container"></div>
    
    <script>
        var Editor = new class extends Combo.Component {
            render() {
                return `
                    <div contenteditable="true">
                    	<p>Edit the content by clicking here.</p>
                    </div>
                `;
            }
        }("container");
        
        Combo.render(Editor);
    </script>
 
 ## Properties
 
Properties can be used to customize how your component looks or behaves. They are passed through the Combo.render function. You can pass multiple properties as seperate arguments or in a single JavaScript object.

    <div id="container"></div>
    
    <script>
        var Editor = new class extends Combo.Component {
            render(props) {
                return `
                    <div contenteditable="${props.enabled}">
                    	<p>Edit the content by clicking here.</p>
                    </div>
                `;
            }
        }("container");
        
        Combo.render(Editor, {enabled: true});
    </script>

## Children

Child components are rendered by directly calling their render method from inside their parent's template literal. Child components do not the ID of the container passed to them, unless you want to render a child without updating the parent.

    <div id="container"></div>
    
    <script>
        var Editor = new class extends Combo.Component {
            render(props) {
                return `
                    ${Toolbar.render()}
                    <div contenteditable="${props.enabled}">
						<p>Edit the content by clicking here.</p>
                    </div>
                `;
            }
        }("container");
    
        var Toolbar = new class extends Combo.Component {
            render() {
                return `
                    <p>
                    	<button>B</button>
                    	<button>I</button>
                    	<button>U</button>
                	</p>
                `;
            }
        }();
        
        Combo.render(Editor, {enabled: true});
    </script>
    
## Events

Events are custom methods inside a component. Typically, they can be fired using the standard HTML event attribute. However, the ID passed in the constructor is stored in a property called root. You can lookup the element in the DOM using this.

    <div id="container"></div>
    
    <script>
        var Editor = new class extends Combo.Component {
            render(props) {
                return `
                    ${Toolbar.render()}
                    <div contenteditable="${props.enabled}">
						<p>Edit the content by clicking here.</p>
                    </div>
                `;
            }
        }("container");
    
        var Toolbar = new class extends Combo.Component {
            execute(command) {
                document.execCommand(command);
            }
            render() {
                return `
                	<p>
                    	<button onclick="Toolbar.execute('bold')">B</button>
                    	<button onclick="Toolbar.execute('italic')">I</button>
                    	<button onclick="Toolbar.execute('underline')">U</button>
                	</p>
                `;
            }
        }();
        
        Combo.render(Editor, {enabled: true});
    </script>

## Lists

    <div id="container"></div>
    
    <script>
        var Editor = new class extends Combo.Component {
            render(props) {
                return `
                    ${Toolbar.render(props)}
                    <div contenteditable="${props.enabled}">
						<p>Edit the content by clicking here.</p>
                    </div>
                `;
            }
        }("container");
    
        var Toolbar = new class extends Combo.Component {
            execute(command) {
                document.execCommand(command);
            }
            render(props) {
            	let buttons = props.buttons.map((button) => {
            		return `
            			<button onclick="Toolbar.execute('${button.command}')">
            				${button.text}
        				</button>
    				`;
        		}).join("");
                
                return `<p>${buttons}</p>`;
            }
        }();
        
        Combo.render(Editor, {
        	enabled: true,
        	buttons: [
        		{text: "B", command: "bold"},
        		{text: "I", command: "italic"},
        		{text: "U", command: "underline"}        		        		
        	]
    	});
    </script>