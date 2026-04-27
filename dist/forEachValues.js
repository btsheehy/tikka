import curryRight from './curryRight.js';

/**
 * Runs `func` for each object value and returns original object.
 * @param obj - Input value for obj.
 * @param fn - Input value for fn.
 * @returns The computed result.
 *
 * @example
 * forEachValues(obj, fn)
 */
const forEachValues = (obj, fn) => {
    Object.entries(obj).forEach(([_key, value]) => {
        fn(value);
    });
    return obj;
};
var forEachValues$1 = /*#__PURE__*/ curryRight(forEachValues);

export { forEachValues$1 as default };
//# sourceMappingURL=forEachValues.js.map
