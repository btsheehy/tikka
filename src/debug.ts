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

type Debug = {
  <T>(msg: string, value: T): T
  (msg: string): <T>(value: T) => T
}

const debugCurried = /*#__PURE__*/ curryRight(debug) as Debug

export default debugCurried
