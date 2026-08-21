'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const test = (str, regex) => regex.test(str);
/**
 * Tests whether a string matches a regular expression.
 * @param str - String to test.
 * @param regex - Regular expression to run.
 * @returns `true` when `regex.test(str)` matches.
 *
 * @example
 * test(/^v\d+$/, 'v12') // true
 */
const testCurried = /*#__PURE__*/ curryRight.default(test);

exports.default = testCurried;
//# sourceMappingURL=test.cjs.map
