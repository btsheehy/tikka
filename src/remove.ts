import curryRight from './curryRight'

const remove = <T>(arr: T[], pred: (value: T) => boolean): T[] => {
  const result: T[] = []
  let i = 0
  while (i < arr.length) {
    if (!pred(arr[i])) result.push(arr[i])
    i++
  }
  return result
}

type Remove = {
  <T>(pred: (value: T) => boolean, arr: T[]): T[]
  <T>(pred: (value: T) => boolean): (arr: T[]) => T[]
}

/**
 * Removes items that match a predicate.
 * @param arr - Source array.
 * @param pred - Predicate that marks elements to remove.
 * @returns A new array containing only elements where `pred` is `false`.
 *
 * @example
 * remove((n) => n % 2 === 0, [1, 2, 3, 4]) // [1, 3]
 */
const removeCurried = /*#__PURE__*/ curryRight(remove) as Remove

export default removeCurried
