import curryRight from './curryRight'

/**
 * Logs a label and value, then returns the original value.
 * @param value - Value to pass through unchanged.
 * @param msg - Label printed before the value.
 * @returns The same `value`, enabling debug taps in pipelines.
 *
 * @example
 * debug('after parse', record)
 */
const debug = <T>(value: T, msg: string): T => {
  console.log(msg)
  console.log(value)
  return value
}

export default /*#__PURE__*/ curryRight(debug)
