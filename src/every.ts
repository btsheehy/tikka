import curryRight from './curryRight'

/**
 * Checks whether all items in an array satisfy a predicate.
 * @param arr - Array to validate.
 * @param test - Predicate run for each element until a failure is found.
 * @returns `true` when every element passes `test`; otherwise `false`.
 *
 * @example
 * every((n) => n > 0, [1, 3, 5]) // true
 */
const every = <T>(arr: Array<T>, test: (x: T) => boolean) => {
  let allPass = true
  let i = 0
  const length = arr.length
  while (i < length) {
    const passes = test(arr[i])
    allPass = passes
    if (!passes) break
    i++
  }

  return allPass
}

export default /*#__PURE__*/ curryRight(every)
