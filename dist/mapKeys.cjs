'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

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
const mapKeys = /*#__PURE__*/ curryRight.default(mapKeysImpl);

exports.default = mapKeys;
//# sourceMappingURL=mapKeys.cjs.map
