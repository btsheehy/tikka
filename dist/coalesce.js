import curryRight from './curryRight.js';

/**
 * Returns `value` unless it is `null` or `undefined`, otherwise returns `fallback`.
 * @param value - Input value for value.
 * @param fallback - Input value for fallback.
 * @returns The computed result.
 *
 * @example
 * coalesce(value, fallback)
 */
const coalesce = (value, fallback) => (value ?? fallback);
var coalesce$1 = /*#__PURE__*/ curryRight(coalesce);

export { coalesce$1 as default };
//# sourceMappingURL=coalesce.js.map
