![Logo](https://github.com/combojs/combo-js/blob/master/doc/img/logo.png?raw=true)

# Combo.js

[![npm version](https://badge.fury.io/js/combo-js.svg)](https://badge.fury.io/js/combo-js)
[![Code Climate](https://codeclimate.com/github/combojs/combo-js/badges/gpa.svg)](https://codeclimate.com/github/combojs/combo-js)
[![Dependencies](https://img.shields.io/badge/dependencies-babel--polyfill-blue.svg)](https://babeljs.io/docs/usage/polyfill/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/combo-js/)

Combo.js is a lightweight library for creating user-interfaces.

* [Website](http://www.combojs.com/)
* [API](doc/api/api.md)
* [FAQ](doc/faq/faq.md)
* [Annotated Source](https://cdn.rawgit.com/combojs/combo-js/master/doc/docco/combo.full.html)
* [Combo Seed](https://github.com/combojs/combo-seed)

## Example

    var Fruit = new class extends Combo.Component {
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

    Fruit.mount(document.getElementById("root"), {
        items: [
            "Apple",
            "Orange",
            "Bannana"
        ]
    });
    
## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)
