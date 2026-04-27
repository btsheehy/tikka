'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Splits a string using a separator string or regex.
 * @param str - String to split.
 * @param separator - Delimiter used by `String.prototype.split`.
 * @returns Array of substrings.
 *
 * @example
 * split(',', 'a,b,c') // ['a', 'b', 'c']
 */
const split = (str, separator) => str.split(separator);
const splitCurried = /*#__PURE__*/ curryRight.default(split);

exports.default = splitCurried;
//# sourceMappingURL=split.cjs.map
