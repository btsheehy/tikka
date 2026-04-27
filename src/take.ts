import curryRight from './curryRight'

/**
 * Returns first `num` elements.
 * @param arr - Input value for arr.
 * @param num - Input value for num.
 * @returns The computed result.
 *
 * @example
 * take(arr, num)
 */
const take = <T>(arr: T[], num: number) => {
  return arr.slice(0, num)
}

export default /*#__PURE__*/ curryRight(take)
