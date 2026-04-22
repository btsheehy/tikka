'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');
var get = require('./get.cjs');

/**
 * getOr utility function.
 */
function getOr(obj, prop, defaultValue) {
    if (Object.hasOwn(obj, prop))
        return get.default(prop, obj);
    return defaultValue;
}
var getOr$1 = /*#__PURE__*/ curryRight.default(getOr);

exports.default = getOr$1;
//# sourceMappingURL=getOr.cjs.map
