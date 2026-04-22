import filter from './filter.js';

/**
 * Removes `null` and `undefined` values from an array.
 */
const compact = (arr) => {
    return filter((value) => value != null, arr);
};

export { compact as default };
//# sourceMappingURL=compact.js.map
