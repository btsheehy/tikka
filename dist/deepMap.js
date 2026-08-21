import curryRight from './curryRight.js';
import mapCurried from './map.js';
import mapValuesCurried from './mapValues.js';
import type from './type.js';

function deepMap(data, func) {
    const recurseFunc = (value) => {
        if (type(value) === 'Array') {
            return mapCurried((entry) => recurseFunc(entry), value);
        }
        if (type(value) === 'Object') {
            return mapValuesCurried((entry) => recurseFunc(entry), value);
        }
        return func(value);
    };
    return recurseFunc(data);
}
/**
 * Recursively maps every leaf value in a nested array/object structure.
 * @param data - Nested structure to transform.
 * @param func - Mapper applied to each leaf value.
 * @returns A new structure with the same shape and transformed leaves.
 *
 * @example
 * deepMap((n) => n * 10, { a: 1, b: [2, 3] })
 */
const deepMapCurried = /*#__PURE__*/ curryRight(deepMap);

export { deepMapCurried as default };
//# sourceMappingURL=deepMap.js.map
