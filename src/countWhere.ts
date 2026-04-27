import curryRight from './curryRight'
import filter from './filter'

/**
 * Counts how many array items satisfy a predicate.
 * @param arr - Items to test.
 * @param test - Predicate used to include/exclude each item.
 * @returns Number of elements for which `test` returns `true`.
 *
 * @example
 * countWhere((n) => n % 2 === 0, [1, 2, 3, 4]) // 2
 */
const countWhere = <T>(arr: Array<T>, test: (x: T) => boolean): number => {
  return filter(test, arr).length
}

export default /*#__PURE__*/ curryRight(countWhere)
