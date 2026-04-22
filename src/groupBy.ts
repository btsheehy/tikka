import curryRight from './curryRight'
import get from './get'

/**
 * Groups array values by string key.
 *
 * @example
 * groupBy((x)=>x%2?'odd':'even', [1,2,3])
 */
const groupBy = <T>(arr: T[], grouper: keyof T | ((x: T) => string | number)) => {
  const groupingFunction = typeof grouper === 'function' ? grouper : get(grouper)
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
