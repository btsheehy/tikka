import curryRight from './curryRight.js';

/**
 * mapKeys utility function.
 * @param obj - Input value for obj.
 * @param fn - Input value for fn.
 * @returns The computed result.
 *
 * @example
 * mapKeysImpl(obj, fn)
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
