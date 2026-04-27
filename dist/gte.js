import curry from './curry.js';

/**
 * gte utility function.
 * @param a - Input value for a.
 * @param b - Input value for b.
 * @returns The computed result.
 *
 * @example
 * gt(a, b)
 */
const gt = (a, b) => a >= b;
var gte = /*#__PURE__*/ curry(gt);

export { gte as default };
//# sourceMappingURL=gte.js.map
