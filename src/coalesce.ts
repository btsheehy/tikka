import curryRight from './curryRight'

/**
 * Returns `value` unless it is `null` or `undefined`, otherwise returns `fallback`.
 * @param value - Input value for value.
 * @param fallback - Input value for fallback.
 * @returns The computed result.
 *
 * @example
 * coalesce(value, fallback)
 */
const coalesce = <T>(value: T | null | undefined, fallback: T) => (value ?? fallback)

export default /*#__PURE__*/ curryRight(coalesce)
