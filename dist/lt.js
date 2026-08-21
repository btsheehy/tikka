import curryRight from './curryRight.js';

const lt = (a, b) => a < b;
/**
 * Compares numbers with `<`.
 * @param a - Right numeric operand.
 * @param b - Left numeric operand.
 * @returns `true` when `b` is less than `a`.
 *
 * @example
 * lt(2)(5) // false
 */
const ltCurried = /*#__PURE__*/ curryRight(lt);

export { ltCurried as default };
//# sourceMappingURL=lt.js.map
