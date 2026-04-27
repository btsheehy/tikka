'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Reads a property from an object by key.
 * @param object - Object to read from.
 * @param property - Property key to retrieve.
 * @returns The value stored at `object[property]`.
 *
 * @example
 * get('name', { id: 1, name: 'Ada' }) // 'Ada'
 */
const getImpl = (object, property) => object[property];
const get = /*#__PURE__*/ curryRight.default(getImpl);

exports.default = get;
//# sourceMappingURL=get.cjs.map
