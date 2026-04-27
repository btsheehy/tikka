import curryRight from './curryRight.js';

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
var test$1 = /*#__PURE__*/ curryRight(test);

export { test$1 as default };
//# sourceMappingURL=test.js.map
