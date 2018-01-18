# Combo

[![npm version](https://badge.fury.io/js/combo-js.svg)](https://badge.fury.io/js/combo-js)
[![Maintainability](https://api.codeclimate.com/v1/badges/d10bec7db7a66b7dbc44/maintainability)](https://codeclimate.com/github/combojs/combo-js/maintainability)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/combo-js/)

A mean component-based user interface library.

## Documentation

* [Website](https://www.combojs.com/)
* [API Reference](https://github.com/combojs/combo-js/blob/master/doc/api.md)
* [Frequently Asked Questions](https://github.com/combojs/combo-js/blob/master/doc/faq.md)
* [Examples](https://github.com/combojs/combo-examples/)

## Quick Example

More examples can be found [here](https://github.com/combojs/combo-examples/).

	var List = new class extends Combo.Component {
	  _items() {
	    return this.data.items.map((item) => {
	      return `
	        <li>${item}</li>
	      `;
	    }).join("");
	  }
	  render() {
	    return `
	      <ul>
	        ${this._items()}
	      </ul>
	    `;
	  }
	}();

	List.mount(document.getElementById("root"), {
	  items: [
	    "Apple",
	    "Orange",
	    "Bannana"
	  ]
	});

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

