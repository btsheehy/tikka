import curryRight from './curryRight'

/**
 * Takes the first `num` elements from an array.
 * @param arr - Source array.
 * @param num - Number of elements to keep from the start.
 * @returns A new array containing up to `num` leading items.
 *
 * @example
 * take(3, [10, 20, 30, 40]) // [10, 20, 30]
 */
const take = <T>(arr: T[], num: number) => {
  return arr.slice(0, num)
}

export default /*#__PURE__*/ curryRight(take)
