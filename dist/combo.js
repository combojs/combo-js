(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define('Combo',[],b):'object'==typeof exports?exports.Combo=b():a.Combo=b()})('undefined'==typeof self?this:self,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=1)}([function(a,b){'use strict';function c(a){if('undefined'!=typeof a.firstChild)for(;a.firstChild;)a.removeChild(a.firstChild)}Object.defineProperty(b,'__esModule',{value:!0}),b._removeHTML=c,b._replaceHTML=function(a,b){var d=2<arguments.length&&arguments[2]!==void 0&&arguments[2];!1==d&&c(a),a.insertAdjacentHTML('beforeEnd',b)},b.isComponent=function(a){return'function'==typeof a.mount};b.version='3.0.2'},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.version=b.isComponent=b.Component=void 0;var d=c(0),e=c(2),f=function(a){return a&&a.__esModule?a:{default:a}}(e);b.Component=f.default,b.isComponent=d.isComponent,b.version=d.version},function(a,b,c){'use strict';function d(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(b,'__esModule',{value:!0});var e=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=c(0),g=function(){function a(b){d(this,a),Object.assign(this,b),'undefined'==typeof this.data&&(this.data={}),'function'==typeof this.created&&this.created()}return e(a,[{key:'clone',value:function(){'function'==typeof this.cloning&&this.cloning();var a=Object.assign(Object.create(this),this);return'function'==typeof this.cloned&&this.cloned(),a}},{key:'update',value:function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=this.data;'function'==typeof this.updating&&this.updating(b),this.data=Object.assign({},this.data,a),this.refresh(),'function'==typeof this.updated&&this.updated(b)}},{key:'refresh',value:function(){this.isMounted&&'function'==typeof this.render&&(0,f._replaceHTML)(this.el,this.render())}},{key:'mount',value:function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};'function'==typeof this.mounting&&this.mounting(),this.el=a,this.data=Object.assign({},this.data,b),'function'==typeof this.render&&(0,f._replaceHTML)(this.el,this.render()),'function'==typeof this.mounted&&this.mounted()}},{key:'unmount',value:function(){var a=0<arguments.length&&void 0!==arguments[0]&&arguments[0];'function'==typeof this.unmounting&&this.unmounting(),!0===a&&(0,f._removeHTML)(this.el),delete this.el,'function'==typeof this.unmounted&&this.unmounted()}},{key:'isMounted',get:function(){return!!this.el}}]),a}();b.default=g}])});