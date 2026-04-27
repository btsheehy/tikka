import curry from './curry.js';

/**
 * Multiplies two numbers.
 * @param a - Left factor.
 * @param b - Right factor.
 * @returns Product `a * b`.
 *
 * @example
 * multiply(6, 7) // 42
 */
const multiply = (a, b) => a * b;
const multiplyCurried = /*#__PURE__*/ curry(multiply);

export { multiplyCurried as default };
//# sourceMappingURL=multiply.js.map
