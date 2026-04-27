import curryRight from './curryRight'

/**
 * Returns index of first matching element or `-1`.
 * @param arr - Input value for arr.
 * @param findFunc - Input value for findFunc.
 * @returns The computed result.
 *
 * @example
 * findIndex(arr, findFunc)
 */
const findIndex = <T>(arr: Array<T>, findFunc: (x: T) => boolean) => {
  let i = 0
  const length = arr.length
  while (i < length) {
    if (findFunc(arr[i])) return i
    i++
  }
  return -1
}

export default /*#__PURE__*/ curryRight(findIndex)
