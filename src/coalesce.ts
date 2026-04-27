import curryRight from './curryRight'

/**
 * Falls back when a value is `null` or `undefined`.
 * @param value - Preferred value.
 * @param fallback - Value used only when `value` is nullish.
 * @returns `value` when present, otherwise `fallback`.
 *
 * @example
 * coalesce('Anonymous', profile.nickname)
 */
const coalesce = <T>(value: T | null | undefined, fallback: T) => value ?? fallback

export default /*#__PURE__*/ curryRight(coalesce)
