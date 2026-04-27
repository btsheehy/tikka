'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Gets property by key.
 *
 * @example
 * get('a', { a: 1 }) // 1
 * @param object - Input value for object.
 * @param property - Input value for property.
 * @returns The computed result.
 */
const getImpl = (object, property) => object[property];
const get = /*#__PURE__*/ curryRight.default(getImpl);

exports.default = get;
//# sourceMappingURL=get.cjs.map
