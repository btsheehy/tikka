import curryRight from './curryRight'

/**
 * Returns first `num` elements.
 */
const take = <T>(arr: T[], num: number) => {
  return arr.slice(0, num)
}

export default /*#__PURE__*/ curryRight(take)
