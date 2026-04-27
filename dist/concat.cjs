'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

function concatRaw(left, right) {
    if (typeof left === 'string' && typeof right === 'string') {
        return left.concat(right);
    }
    if (Array.isArray(left) && Array.isArray(right)) {
        return left.concat(right);
    }
    throw new TypeError('concat expects both arguments to be arrays or both to be strings');
}
const concat = /*#__PURE__*/ curry.default(concatRaw);

exports.default = concat;
//# sourceMappingURL=concat.cjs.map
