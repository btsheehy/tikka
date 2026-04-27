'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var filter = require('./filter.cjs');

/**
 * Removes `null`, `undefined`, and `NaN` values from an array.
 * @param arr - Input value for arr.
 * @returns The computed result.
 *
 * @example
 * compact(arr)
 */
const compact = (arr) => {
    const pred = (el) => {
        if (el === undefined)
            return false;
        if (el === null)
            return false;
        if (Number.isNaN(el))
            return false;
        return true;
    };
    return filter.default(pred, arr);
};

exports.default = compact;
//# sourceMappingURL=compact.cjs.map
