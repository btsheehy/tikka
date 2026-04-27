import curryRight from './curryRight'

/**
 * Returns `value` unless it is `null` or `undefined`, otherwise returns `fallback`.
 */
const coalesce = <T>(value: T | null | undefined, fallback: T) => (value ?? fallback)

export default /*#__PURE__*/ curryRight(coalesce)
