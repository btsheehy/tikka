'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

/**
 * lte utility function.
 */
const lt = (a, b) => a <= b;
var lte = /*#__PURE__*/ curry.default(lt);

exports.default = lte;
//# sourceMappingURL=lte.cjs.map
