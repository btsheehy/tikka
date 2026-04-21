import curryRight from './curryRight'

/**
 * Checks whether `searchTarget.includes(value)` is true.
 */
export type IncludesTarget = {
  includes: (value: unknown) => boolean
}

const contains = (searchTarget: IncludesTarget, value: unknown): boolean =>
  searchTarget.includes(value)

export default /*#__PURE__*/ curryRight(contains)
