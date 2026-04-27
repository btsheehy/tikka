import filter from './filter.js';

/**
 * Removes `null`, `undefined`, and `NaN` entries from an array.
 * @param arr - Array that may contain empty values.
 * @returns A new array containing only defined, non-`NaN` items.
 *
 * @example
 * compact([0, null, 2, undefined, Number.NaN, 4]) // [0, 2, 4]
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
