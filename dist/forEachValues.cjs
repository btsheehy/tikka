'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const forEachValues = (obj, fn) => {
    Object.entries(obj).forEach(([_key, value]) => {
        fn(value);
    });
    return obj;
};
/**
 * Runs a callback for each own enumerable value in an object.
 * @param obj - Object whose values will be visited.
 * @param fn - Callback invoked for each value.
 * @returns The original `obj`.
 *
 * @example
 * forEachValues((value) => console.log(value), { a: 1, b: 2 })
 */
const forEachValuesCurried = /*#__PURE__*/ curryRight.default(forEachValues);

exports.default = forEachValuesCurried;
//# sourceMappingURL=forEachValues.cjs.map
