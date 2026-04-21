import curryRight from './curryRight'
import filter from './filter'

/**
 * Counts array elements matching `test`.
 *
 * @example
 * countWhere((x) => x % 2 === 0, [1,2,3,4]) // 2
 */
const countWhere = <T>(arr: Array<T>, test: (x: T) => boolean): number => {
  return filter(test, arr).length
}

export default /*#__PURE__*/ curryRight(countWhere)
