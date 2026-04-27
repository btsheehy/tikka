/**
 * filter utility function.
 * @param arr - Input value for arr.
 * @param filterFunc - Input value for filterFunc.
 * @returns The computed result.
 *
 * @example
 * filter(arr, filterFunc)
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

export default /*#__PURE__*/ curryRight(filter, filter.length)
