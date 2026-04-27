import curryRight from './curryRight'

/**
 * Checks whether `searchTarget.includes(value)` is true.
 * @param searchTarget - Input value for searchTarget.
 * @param value - Input value for value.
 * @returns The computed result.
 *
 * @example
 * contains(searchTarget, value)
 */
export type IncludesTarget = {
  includes: (value: unknown) => boolean
}

const contains = (searchTarget: IncludesTarget, value: unknown): boolean =>
  searchTarget.includes(value)

export default /*#__PURE__*/ curryRight(contains)
