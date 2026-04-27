'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * pluck utility function.
 * @param collection - Input value for collection.
 * @param prop - Input value for prop.
 * @returns The computed result.
 *
 * @example
 * pluckImpl(collection, prop)
 */
const pluckImpl = (collection, prop) => collection.map((item) => item[prop]);
const pluck = /*#__PURE__*/ curryRight.default(pluckImpl);

exports.default = pluck;
//# sourceMappingURL=pluck.cjs.map
