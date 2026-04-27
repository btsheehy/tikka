import curryRight from './curryRight.js';

/**
 * Falls back when a value is `null` or `undefined`.
 * @param value - Preferred value.
 * @param fallback - Value used only when `value` is nullish.
 * @returns `value` when present, otherwise `fallback`.
 *
 * @example
 * coalesce('Anonymous', profile.nickname)
 */
const coalesce = (value, fallback) => value ?? fallback;
var coalesce$1 = /*#__PURE__*/ curryRight(coalesce);

export { coalesce$1 as default };
//# sourceMappingURL=coalesce.js.map
