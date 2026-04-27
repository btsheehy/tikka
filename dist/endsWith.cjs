'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Checks whether a string ends with a suffix.
 * @param str - Full string to inspect.
 * @param suffix - Trailing substring to match.
 * @returns `true` when `str` ends with `suffix`.
 *
 * @example
 * endsWith('.ts', 'index.ts') // true
 */
const endsWith = (str, suffix) => str.endsWith(suffix);
var endsWith$1 = /*#__PURE__*/ curryRight.default(endsWith);

exports.default = endsWith$1;
//# sourceMappingURL=endsWith.cjs.map
