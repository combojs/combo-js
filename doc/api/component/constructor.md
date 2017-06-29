# Component constructor

The constructor function.

----------------------------------------------------------------------

## Usage

Combo.Component() 

----------------------------------------------------------------------

## Example

	var Header = new class extends Combo.Component {
		constructor() {
			super();

			// Default properties.
			//
			this.update({
 				title: "Combo"
			});
		}
		render() {
			return `
				<header>
					<h1>${this.props.title}</h1>
				</header>
			`;
		}
	}();

	Combo.render(document.getElementById("main"), Header.render());