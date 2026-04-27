'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');
var filter = require('./filter.cjs');

/**
 * Counts how many array items satisfy a predicate.
 * @param arr - Items to test.
 * @param test - Predicate used to include/exclude each item.
 * @returns Number of elements for which `test` returns `true`.
 *
 * @example
 * countWhere((n) => n % 2 === 0, [1, 2, 3, 4]) // 2
 */
const countWhere = (arr, test) => {
    return filter.default(test, arr).length;
};
var countWhere$1 = /*#__PURE__*/ curryRight.default(countWhere);

exports.default = countWhere$1;
//# sourceMappingURL=countWhere.cjs.map
