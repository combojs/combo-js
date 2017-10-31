# Component.data

An object that contains data specific to the component.

## Usage

Component.data

## Example

	var Header = new Combo.Component({
		render: function() {
			return `	
				<header>
					<h1 class="title">${this.data.title}</h1>
				</header>
			`;
		}
	});

	Header.mount(document.getElementById("root"), {
		title: "Combo"
	});

[View on CodePen](https://codepen.io/combojs/pen/KypZEm)