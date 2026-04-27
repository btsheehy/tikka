'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * has utility function.
 * @param obj - Input value for obj.
 * @param prop - Input value for prop.
 * @returns The computed result.
 *
 * @example
 * has(obj, prop)
 */
const has = (obj, prop) => Object.hasOwn(obj, prop);
var has$1 = /*#__PURE__*/ curryRight.default(has);

exports.default = has$1;
//# sourceMappingURL=has.cjs.map
