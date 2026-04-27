import curryRight from './curryRight.js';

/**
 * mapValues utility function.
 * @param _unused - This function takes no explicit parameters.
 * @returns The computed result.
 *
 * @example
 * mapValues()
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
