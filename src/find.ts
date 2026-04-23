import curryRight from './curryRight'

/**
 * Returns first matching element or `undefined`.
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
