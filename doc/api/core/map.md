# Combo.map

Return a concatenated string from elements in an Array.

----------------------------------------------------------------------

## Usage

Combo.map(obj, fn) 

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| obj             | `Array`       | The Array.                       |
| fn              | `string`      | The callback Function.           |

----------------------------------------------------------------------

## Example

	var People = new class extends Combo.Component {
		render() {
			let html = Combo.map(this.props.items, (item) => {
				return `
					<li>${item.firstName} ${item.lastName}</li>
				`;	
			});

            return `
                <ul>
                    ${html}
                </ul>
            `;
		}
	}();

    People.update({
        items: [
            {firstName: "John", lastName: "Doe"},
            {firstName: "Jane", lastName: "Doe"}          
        ]
    });	

	Combo.render(document.getElementById("main"), People.render());