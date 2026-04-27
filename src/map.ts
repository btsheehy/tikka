import curryRight from './curryRight'

/**
 * Maps each array item to a new value.
 * @param arr - Source array.
 * @param fn - Mapper applied to each element.
 * @returns A new array with transformed values.
 *
 * @example
 * map((n) => n * 2, [1, 2, 3]) // [2, 4, 6]
 */
const map = <T, R>(arr: T[], fn: (x: T) => R): R[] => {
  const result = new Array<R>(arr.length)
  let index = 0

  while (index < arr.length) {
    result[index] = fn(arr[index])
    index += 1
  }

  return result
}

type Map = {
  <T, R>(fn: (x: T) => R, arr: T[]): R[]
  <T, R>(fn: (x: T) => R): (arr: T[]) => R[]
}

const mapCurried = /*#__PURE__*/ curryRight(map) as Map

export default mapCurried
