import curryRight from './curryRight'

/**
 * Returns first matching element or `undefined`.
 * @param arr - Input value for arr.
 * @param findFunc - Input value for findFunc.
 * @returns The computed result.
 *
 * @example
 * find(arr, findFunc)
 */
const find = <T>(arr: Array<T>, findFunc: (x: T) => boolean) => {
  let i = 0
  while (i < arr.length) {
    if (findFunc(arr[i])) return arr[i]
    i++
  }
  return undefined
}

export default /*#__PURE__*/ curryRight(find)
