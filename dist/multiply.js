import curry from './curry.js';

const multiply = (a, b) => a * b;
/**
 * Multiplies two numbers.
 * @param a - Left factor.
 * @param b - Right factor.
 * @returns Product `a * b`.
 *
 * @example
 * multiply(6, 7) // 42
 */
const multiplyCurried = /*#__PURE__*/ curry(multiply);

export { multiplyCurried as default };
//# sourceMappingURL=multiply.js.map
