import curryRight from './curryRight'

/**
 * Logs `msg` and `value`, then returns `value`.
 */
const debug = <T>(value: T, msg: string): T => {
  console.log(msg)
  console.log(value)
  return value
}

export default /*#__PURE__*/ curryRight(debug)
