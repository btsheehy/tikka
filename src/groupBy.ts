import curryRight from './curryRight'

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
