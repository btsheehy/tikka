import curryRight from './curryRight.js';

/**
 * Runs `regex.test(str)`.
 * @param str - Input value for str.
 * @param regex - Input value for regex.
 * @returns The computed result.
 *
 * @example
 * test(str, regex)
 */
const test = (str, regex) => regex.test(str);
var test$1 = /*#__PURE__*/ curryRight(test);

export { test$1 as default };
//# sourceMappingURL=test.js.map
