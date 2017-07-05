![Logo](https://github.com/combojs/combo-js/blob/master/doc/img/logo.png?raw=true)

# Combo.js

A lightweight library for building user interfaces. 

* [Official Site](http://www.combojs.com/)
* [API Reference](https://github.com/combojs/combo-js/blob/master/doc/api/api.md)
* [Annotated Source](https://cdn.rawgit.com/combojs/combo-js/master/doc/docco/combo.full.html)
* [Gitter](https://gitter.im/combo-js/)

## Quick Example

	<div id="root"></div>
	
	<script>
		var Layout = new class extends Combo.Component {
			render() {
				return `
					${Header.render()}
					${Content.render()}
				`;		
			}
		}("root");

		var Header = new class extends Combo.Component {
			render() {
				return `
					<header>
						<h1>Header</h1>
					</header>
				`;
			}
		}();

		var Content = new class extends Combo.Component {
			render() {
				return `
					<main>
						<p>Content</p>
					</main>
				`;
			}
		}();

		Combo.render(Layout);
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

