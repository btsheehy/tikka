import curryRight from './curryRight'

const forEach = <T>(arr: T[], func: (x: T) => void) => {
  arr.forEach((val) => {
    func(val)
  })
  return arr
}

type ForEach = {
  <T>(func: (x: T) => void, arr: T[]): T[]
  <T>(func: (x: T) => void): (arr: T[]) => T[]
}

/**
 * Runs a callback for each array item and returns the original array.
 * @param arr - Array to iterate.
 * @param func - Side-effect callback executed for each element.
 * @returns The same `arr` instance.
 *
 * @example
 * forEach((n) => console.log(n), [1, 2, 3])
 */
const forEachCurried = /*#__PURE__*/ curryRight(forEach) as ForEach

export default forEachCurried
