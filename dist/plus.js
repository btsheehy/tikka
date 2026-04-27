import curry from './curry.js';

/**
 * Adds two numbers.
 * @param a - Left addend.
 * @param b - Right addend.
 * @returns Sum `a + b`.
 *
 * @example
 * plus(2)(3) // 5
 */
const plus = (a, b) => a + b;
var plus$1 = /*#__PURE__*/ curry(plus);

export { plus$1 as default };
//# sourceMappingURL=plus.js.map
