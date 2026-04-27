import curry from './curry.js';

/**
 * or utility function.
 * @param a - Input value for a.
 * @param b - Input value for b.
 * @returns The computed result.
 *
 * @example
 * or(a, b)
 */
const or = (a, b) => !!(a || b);
var or$1 = /*#__PURE__*/ curry(or);

export { or$1 as default };
//# sourceMappingURL=or.js.map
