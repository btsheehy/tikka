/**
 * forEach utility function.
 * @param arr - Input value for arr.
 * @param func - Input value for func.
 * @returns The computed result.
 *
 * @example
 * forEach(arr, func)
 */
import curryRight from './curryRight'

const forEach = <T>(arr: T[], func: (x: T) => unknown) => {
  arr.forEach((val) => {
    func(val)
  })
  return arr
}

export default /*#__PURE__*/ curryRight(forEach)
