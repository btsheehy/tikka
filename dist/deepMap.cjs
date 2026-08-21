'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');
var map = require('./map.cjs');
var mapValues = require('./mapValues.cjs');
var type = require('./type.cjs');

function deepMap(data, func) {
    const recurseFunc = (value) => {
        if (type.default(value) === 'Array') {
            return map.default((entry) => recurseFunc(entry), value);
        }
        if (type.default(value) === 'Object') {
            return mapValues.default((entry) => recurseFunc(entry), value);
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
const deepMapCurried = /*#__PURE__*/ curryRight.default(deepMap);

exports.default = deepMapCurried;
//# sourceMappingURL=deepMap.cjs.map
