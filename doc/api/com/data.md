# Component.data

An object that contains data specific to the component.

## Usage

Component.data

## Example

    var Profile = new class extends Combo.Component {
        render() {
            return `
                <div>First name: ${this.data.firstName}</div>
                <div>Last name: ${this.data.lastName}</div>                
            `;
        }
    }();

    Profile.mount(document.getElementById("root"), {
    	firstName: "John",
    	lastName: "Doe"
	});

