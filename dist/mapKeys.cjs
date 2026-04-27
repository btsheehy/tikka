'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * mapKeys utility function.
 */
const mapKeys = (obj, fn) => {
    const keys = Object.keys(obj);
    const newObj = {};
    keys.forEach((k) => {
        newObj[fn(k)] = obj[k];
    });
    return newObj;
};
var mapKeys$1 = /*#__PURE__*/ curryRight.default(mapKeys);

exports.default = mapKeys$1;
//# sourceMappingURL=mapKeys.cjs.map
