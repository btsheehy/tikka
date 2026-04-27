/**
 * filter utility function.
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
