import curry from './curry.js';

function concatRaw(left, right) {
    if (typeof left === 'string' && typeof right === 'string') {
        return left.concat(right);
    }
    if (Array.isArray(left) && Array.isArray(right)) {
        return left.concat(right);
    }
    throw new TypeError('concat expects both arguments to be arrays or both to be strings');
}
const concat = /*#__PURE__*/ curry(concatRaw);

export { concat as default };
//# sourceMappingURL=concat.js.map
