'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const debug = (value, msg) => {
    console.log(msg);
    console.log(value);
    return value;
};
var debug$1 = /*#__PURE__*/ curryRight.default(debug);

exports.default = debug$1;
//# sourceMappingURL=debug.cjs.map
