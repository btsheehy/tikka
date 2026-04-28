import curry from './curry.js';

const plus = (a, b) => a + b;
/**
 * Adds two numbers.
 * @param a - Left addend.
 * @param b - Right addend.
 * @returns Sum `a + b`.
 *
 * @example
 * plus(2)(3) // 5
 */
const plusCurried = /*#__PURE__*/ curry(plus);

export { plusCurried as default };
//# sourceMappingURL=plus.js.map
