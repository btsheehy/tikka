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
export type IncludesTarget<T> = {
  includes: (value: T) => boolean
}

const contains = <T>(searchTarget: IncludesTarget<T>, value: T): boolean =>
  searchTarget.includes(value)

type Contains = {
  <T>(value: T, searchTarget: IncludesTarget<T>): boolean
  <T>(value: T): (searchTarget: IncludesTarget<T>) => boolean
}

const containsCurried = /*#__PURE__*/ curryRight(contains) as Contains

export default containsCurried
