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
var multiply$1 = /*#__PURE__*/ curry(multiply);

export { multiply$1 as default };
//# sourceMappingURL=multiply.js.map
