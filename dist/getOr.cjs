'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');
var get = require('./get.cjs');

/**
 * Reads a property from an object, with a fallback when the key is missing.
 * @param obj - Object to inspect.
 * @param prop - Property key to read.
 * @param defaultValue - Value returned when `obj` does not own `prop`.
 * @returns Existing property value, or `defaultValue` when absent.
 *
 * @example
 * getOr('guest', 'role', { name: 'Lin' }) // 'guest'
 */
function getOr(obj, prop, defaultValue) {
    if (Object.hasOwn(obj, prop))
        return get.default(prop, obj);
    return defaultValue;
}
var getOr$1 = /*#__PURE__*/ curryRight.default(getOr);

exports.default = getOr$1;
//# sourceMappingURL=getOr.cjs.map
