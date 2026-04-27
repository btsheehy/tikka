'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

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
var mapValues$1 = /*#__PURE__*/ curryRight.default(mapValues);

exports.default = mapValues$1;
//# sourceMappingURL=mapValues.cjs.map
