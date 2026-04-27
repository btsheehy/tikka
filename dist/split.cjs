'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Runs `str.split(separator)`.
 * @param str - Input value for str.
 * @param separator - Input value for separator.
 * @returns The computed result.
 *
 * @example
 * split(str, separator)
 */
const split = (str, separator) => str.split(separator);
var split$1 = /*#__PURE__*/ curryRight.default(split);

exports.default = split$1;
//# sourceMappingURL=split.cjs.map
