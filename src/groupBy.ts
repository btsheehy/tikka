import curryRight from './curryRight'

/**
 * Groups array values by string key.
 *
 * @example
 * groupBy((x)=>x%2?'odd':'even', [1,2,3])
 */
const groupBy = <T>(arr: T[], groupingFunction: (x: T) => string) => {
  return arr.reduce<Record<string, T[]>>((acc, val) => {
    const group = groupingFunction(val)
    if (acc[group]) {
      acc[group].push(val)
    } else {
      acc[group] = [val]
    }
    return acc
  }, {})
}

export default /*#__PURE__*/ curryRight(groupBy)
