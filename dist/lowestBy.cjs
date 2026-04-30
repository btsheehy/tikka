'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const lowestBy = (arr, fn) => {
    let li = 0;
    let l = fn(arr[0]);
    let i = 1;
    while (i < arr.length) {
        const c = fn(arr[i]);
        if (c < l) {
            l = c;
            li = i;
        }
        i++;
    }
    return arr[li];
};
/**
 * Returns the element with the lowest derived numeric score.
 * @param arr - Source array.
 * @param fn - Selector that computes each element's score.
 * @returns The element whose score is smallest.
 *
 * @example
 * lowestBy((user) => user.score, [{ name: 'Ari', score: 12 }, { name: 'Bea', score: 21 }])
 * // { name: 'Ari', score: 12 }
 */
const lowestByCurried = /*#__PURE__*/ curryRight.default(lowestBy);

exports.default = lowestByCurried;
//# sourceMappingURL=lowestBy.cjs.map
