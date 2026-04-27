import curryRight from './curryRight.js';

/**
 * Transforms object values while preserving keys.
 * @param obj - Object whose values will be mapped.
 * @param fn - Mapper run for each value.
 * @returns A new object with the same keys and mapped values.
 *
 * @example
 * mapValues((n) => n * 10, { a: 1, b: 2 }) // { a: 10, b: 20 }
 */
const mapValues = (obj, fn) => {
    const keys = Object.keys(obj);
    const newObj = {};
    for (const key of keys) {
        newObj[key] = fn(obj[key]);
    }
    return newObj;
};
var mapValues$1 = /*#__PURE__*/ curryRight(mapValues);

export { mapValues$1 as default };
//# sourceMappingURL=mapValues.js.map
