'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * pluck utility function.
 */
const pluckImpl = (collection, prop) => collection.map((item) => item[prop]);
const pluck = /*#__PURE__*/ curryRight.default(pluckImpl);

exports.default = pluck;
//# sourceMappingURL=pluck.cjs.map
