'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Tests whether a string matches a regular expression.
 * @param str - String to test.
 * @param regex - Regular expression to run.
 * @returns `true` when `regex.test(str)` matches.
 *
 * @example
 * test(/^v\d+$/, 'v12') // true
 */
const test = (str, regex) => regex.test(str);
var test$1 = /*#__PURE__*/ curryRight.default(test);

exports.default = test$1;
//# sourceMappingURL=test.cjs.map
