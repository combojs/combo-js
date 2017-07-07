![Logo](https://github.com/combojs/combo-js/blob/master/doc/img/logo.png?raw=true)

# Combo.js

A lightweight library for building user interfaces. 

* [Official Site](http://www.combojs.com/)
* [Tutorial](https://github.com/combojs/combo-js/blob/master/doc/learn.md)
* [API Reference](https://github.com/combojs/combo-js/blob/master/doc/api/api.md)
* [Annotated Source](https://cdn.rawgit.com/combojs/combo-js/master/doc/docco/combo.full.html)
* [Gitter](https://gitter.im/combo-js/)

## Quick Example

	<div id="container"></div>
	
	<script>
		var Hello = new class extends Combo.Component {
			render(props) {
				return `
					<div>Hello ${props.name}</div>
				`;		
			}
		}("container");

		Combo.render(Hello, {name: "World"});
	</script>

## Building from Source

Before building this project, you must install and configure the following dependencies on your machine.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/)
* [Grunt](https://gruntjs.com/)

### Building

Once the dependencies are installed, clone the source code repository and use grunt to build it.

	git clone https://github.com/combojs/combo-js.git
	cd combo-js
	npm install
	grunt

## Contributing

We've set up a separate document for our [contribution guidelines](CONTRIBUTING.md).

