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
const coalesceCurried = /*#__PURE__*/ curryRight(coalesce);

export { coalesceCurried as default };
//# sourceMappingURL=coalesce.js.map
