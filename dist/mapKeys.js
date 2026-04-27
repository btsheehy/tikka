import curryRight from './curryRight.js';

/**
 * Renames object keys while keeping the original values.
 * @param obj - Object to transform.
 * @param fn - Function that maps each original key to a new key.
 * @returns A new object keyed by `fn(key)` with original values preserved.
 *
 * @example
 * mapKeys((key) => key.toUpperCase(), { first: 1, second: 2 })
 */
const mapKeysImpl = (obj, fn) => {
    const keys = Object.keys(obj);
    const newObj = {};
    keys.forEach((k) => {
        newObj[fn(k)] = obj[k];
    });
    return newObj;
};
const mapKeys = /*#__PURE__*/ curryRight(mapKeysImpl);

export { mapKeys as default };
//# sourceMappingURL=mapKeys.js.map
