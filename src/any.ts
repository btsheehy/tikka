import curryRight from './curryRight'

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

type Any = {
  <T>(test: (t: T) => boolean, arr: Array<T>): boolean
  <T>(test: (t: T) => boolean): (arr: Array<T>) => boolean
}

/**
 * Checks whether at least one array item satisfies a predicate.
 * @param arr - Array to scan.
 * @param test - Predicate run for each element until a match is found.
 * @returns `true` as soon as one element passes `test`; otherwise `false`.
 *
 * @example
 * any((n) => n > 10, [3, 8, 12]) // true
 */
const anyCurried = /*#__PURE__*/ curryRight(any) as Any

export default anyCurried
