'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

/**
 * gte utility function.
 */
const gt = (a, b) => a >= b;
var gte = /*#__PURE__*/ curry.default(gt);

exports.default = gte;
//# sourceMappingURL=gte.cjs.map
