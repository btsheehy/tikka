'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Checks whether an object owns a property key.
 * @param obj - Object to inspect.
 * @param prop - Property key to check.
 * @returns `true` when `obj` has `prop` as its own property.
 *
 * @example
 * has('id', { id: 5, name: 'Ada' }) // true
 */
const has = (obj, prop) => Object.hasOwn(obj, prop);
var has$1 = /*#__PURE__*/ curryRight.default(has);

exports.default = has$1;
//# sourceMappingURL=has.cjs.map
