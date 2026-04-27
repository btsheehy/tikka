'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Checks whether a string starts with a prefix.
 * @param str - Full string to inspect.
 * @param prefix - Leading substring to match.
 * @returns `true` when `str` starts with `prefix`.
 *
 * @example
 * startsWith('user:', 'user:42') // true
 */
const startsWith = (str, prefix) => str.startsWith(prefix);
const startsWithCurried = /*#__PURE__*/ curryRight.default(startsWith);

exports.default = startsWithCurried;
//# sourceMappingURL=startsWith.cjs.map
