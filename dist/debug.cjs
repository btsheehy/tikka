'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Logs a label and value, then returns the original value.
 * @param value - Value to pass through unchanged.
 * @param msg - Label printed before the value.
 * @returns The same `value`, enabling debug taps in pipelines.
 *
 * @example
 * debug('after parse', record)
 */
const debug = (value, msg) => {
    console.log(msg);
    console.log(value);
    return value;
};
var debug$1 = /*#__PURE__*/ curryRight.default(debug);

exports.default = debug$1;
//# sourceMappingURL=debug.cjs.map
