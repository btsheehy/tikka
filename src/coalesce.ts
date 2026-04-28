import curryRight from './curryRight'

const coalesce = <T>(value: T | null | undefined, fallback: T) => value ?? fallback

type Coalesce = {
  <T>(fallback: T, value: T | null | undefined): T
  <T>(fallback: T): (value: T | null | undefined) => T
}

/**
 * Falls back when a value is `null` or `undefined`.
 * @param value - Preferred value.
 * @param fallback - Value used only when `value` is nullish.
 * @returns `value` when present, otherwise `fallback`.
 *
 * @example
 * coalesce('Anonymous', profile.nickname)
 */
const coalesceCurried = /*#__PURE__*/ curryRight(coalesce) as Coalesce

export default coalesceCurried
