!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e){t.exports=window.wp.element},function(t,e){t.exports=window.wp.i18n},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e){t.exports=window.wp.blocks},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=n(10);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){var r=n(11),o=n(12);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e){t.exports=window.wp.blockEditor},function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r),u=n(5),i=n.n(u),c=n(6),l=n.n(c),s=n(7),f=n.n(s),a=n(2),p=n.n(a),b=n(0),y=n(1),d=n(3),m=n(8);n(13);var x=function(t){l()(u,t);var e,n,r=(e=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=p()(e);if(n){var o=p()(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return f()(this,t)});function u(t){return o()(this,u),r.call(this,t)}return i()(u,[{key:"render",value:function(){var t=this.props,e=t.setAttributes,n=t.attributes.url;return Object(b.createElement)(b.Fragment,null,Object(b.createElement)(m.URLInput,{value:n,onChange:function(t,n){return e({url:t,id:n&&n.id||0})}}))}}]),u}(b.Component);Object(d.registerBlockType)("flobn/styles-issue-block-1",{title:Object(y.__)("Styles Issue Block 1 (with error)","styles-issue-example-block"),category:"widgets",icon:"admin-links",styles:[{name:"default",label:Object(y.__)("Standard","styles-issue-example-block"),isDefault:!0},{name:"small-text",label:Object(y.__)("Small text","styles-issue-example-block")}],edit:x,save:function(){return null}}),Object(d.registerBlockType)("flobn/styles-issue-block-2",{title:Object(y.__)("Styles Issue Block 1 (without error)","styles-issue-example-block"),category:"widgets",icon:"admin-links",edit:x,save:function(){return null}})},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){t.exports=window.wp.apiFetch}]);