'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Deep-flattens nested arrays into a single-level array.
 * @param arr - Potentially nested array.
 * @returns A new array containing all nested values in traversal order.
 *
 * @example
 * flatten([1, [2, [3]], 4]) // [1, 2, 3, 4]
 */
const flatten = (arr) => {
    const result = [];
    const flat = (val) => {
        if (!Array.isArray(val))
            result.push(val);
        else {
            let i = 0;
            const length = val.length;
            while (i < length) {
                if (Array.isArray(val[i]))
                    val[i].forEach(flat);
                else
                    result.push(val[i]);
                i++;
            }
        }
    };
    flat(arr);
    return result;
};

exports.default = flatten;
//# sourceMappingURL=flatten.cjs.map
