import curryRight from './curryRight'

/**
 * Returns true if at least one array element passes `test`.
 * @param arr - Input value for arr.
 * @param test - Input value for test.
 * @returns The computed result.
 *
 * @example
 * any(arr, test)
 */
const any = <T>(arr: Array<T>, test: (t: T) => boolean) => {
  let i = 0
  const length = arr.length
  while (i < length) {
    const val = arr[i]
    const passes = test(val)
    if (passes) return true
    i++
  }

  return false
}

export default /*#__PURE__*/ curryRight(any)
