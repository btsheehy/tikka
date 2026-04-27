import curryRight from './curryRight'

/**
 * Logs `msg` and `value`, then returns `value`.
 * @param value - Input value for value.
 * @param msg - Input value for msg.
 * @returns The computed result.
 *
 * @example
 * debug(value, msg)
 */
const debug = <T>(value: T, msg: string): T => {
  console.log(msg)
  console.log(value)
  return value
}

export default /*#__PURE__*/ curryRight(debug)
