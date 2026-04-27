import curryRight from './curryRight'

/**
 * Checks whether a target with an `includes` method contains a value.
 * @param searchTarget - Array/string/set-like object that implements `includes`.
 * @param value - Value to look for.
 * @returns `true` when `searchTarget.includes(value)` is truthy.
 *
 * @example
 * contains('berry', ['apple', 'berry', 'citrus']) // true
 */
export type IncludesTarget = {
  includes: (value: unknown) => boolean
}

const contains = (searchTarget: IncludesTarget, value: unknown): boolean =>
  searchTarget.includes(value)

export default /*#__PURE__*/ curryRight(contains)
