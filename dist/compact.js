import filter from './filter.js';

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
    return filter(pred, arr);
};

export { compact as default };
//# sourceMappingURL=compact.js.map
