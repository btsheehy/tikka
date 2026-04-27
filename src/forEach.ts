/**
 * Runs a callback for each array item and returns the original array.
 * @param arr - Array to iterate.
 * @param func - Side-effect callback executed for each element.
 * @returns The same `arr` instance.
 *
 * @example
 * forEach((n) => console.log(n), [1, 2, 3])
 */
import curryRight from './curryRight'

const forEach = <T>(arr: T[], func: (x: T) => unknown) => {
  arr.forEach((val) => {
    func(val)
  })
  return arr
}

export default /*#__PURE__*/ curryRight(forEach)
