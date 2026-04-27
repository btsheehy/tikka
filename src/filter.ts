/**
 * Filters an array by predicate.
 * @param arr - Source array.
 * @param filterFunc - Predicate that decides which items to keep.
 * @returns A new array containing only elements where `filterFunc` returned `true`.
 *
 * @example
 * filter((user) => user.active, users)
 */
import curryRight from './curryRight'

const filter = <T>(arr: Array<T>, filterFunc: (x: T) => boolean) => {
  const result: T[] = []
  let i = 0

  while (i < arr.length) {
    if (filterFunc(arr[i])) {
      result.push(arr[i])
    }
    i++
  }

  return result
}

type Filter = {
  <T>(filterFunc: (x: T) => boolean, arr: Array<T>): T[]
  <T>(filterFunc: (x: T) => boolean): (arr: Array<T>) => T[]
}

const filterCurried = /*#__PURE__*/ curryRight(filter, filter.length) as Filter

export default filterCurried
