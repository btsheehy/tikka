/**
 * pluck utility function.
 */
import curryRight from './curryRight'

const pluck = <T, K extends keyof T>(collection: T[], prop: K): T[K][] =>
  collection.map((item) => item[prop])

export default /*#__PURE__*/ curryRight(pluck)
