import curry from './curry.js';

/**
 * lte utility function.
 * @param a - Input value for a.
 * @param b - Input value for b.
 * @returns The computed result.
 *
 * @example
 * lt(a, b)
 */
const lt = (a, b) => a <= b;
var lte = /*#__PURE__*/ curry(lt);

export { lte as default };
//# sourceMappingURL=lte.js.map
