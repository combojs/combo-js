# Combo

[![npm version](https://badge.fury.io/js/combo-js.svg)](https://badge.fury.io/js/combo-js)
[![Code Climate](https://codeclimate.com/github/combojs/combo-js/badges/gpa.svg)](https://codeclimate.com/github/combojs/combo-js)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/combo-js/)

A mean component-based user interface library.

## Documentation

* [Website](https://www.combojs.com/)
* [API Reference](https://github.com/combojs/combo-js/blob/master/doc/api.md)
* [Frequently Asked Questions](https://github.com/combojs/combo-js/blob/master/doc/faq.md)
* [Examples](https://github.com/combojs/combo-examples/)
* [Boilerplate/Seed](https://github.com/combojs/combo-seed)

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

