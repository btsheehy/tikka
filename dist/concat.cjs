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
/**
 * Concatenates two arrays or two strings.
 * @param left - First array/string segment.
 * @param right - Second array/string segment.
 * @returns A combined array/string; throws when argument types differ.
 *
 * @example
 * concat('tikka-', 'js') // 'tikka-js'
 */
const concat = /*#__PURE__*/ curry.default(concatRaw);

exports.default = concat;
//# sourceMappingURL=concat.cjs.map
