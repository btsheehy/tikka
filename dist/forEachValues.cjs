'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

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
var forEachValues$1 = /*#__PURE__*/ curryRight.default(forEachValues);

exports.default = forEachValues$1;
//# sourceMappingURL=forEachValues.cjs.map
