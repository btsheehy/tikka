import curry from './curry.js';

/**
 * Boolean AND over two values.
 * @param a - Input value for a.
 * @param b - Input value for b.
 * @returns The computed result.
 *
 * @example
 * and(a, b)
 */
const and = (a, b) => !!(a && b);
var and$1 = /*#__PURE__*/ curry(and);

export { and$1 as default };
//# sourceMappingURL=and.js.map
