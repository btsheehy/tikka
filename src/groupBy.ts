import curryRight from './curryRight'

const groupBy = <T>(arr: T[], groupingFunction: (x: T) => string) => {
  const result: Record<string, T[]> = {}
  return arr.reduce((acc, val) => {
    const group = groupingFunction(val)
    if (acc[group]) acc[group].concat(val)
    else acc[group] = [val]
    return acc
  }, result)
}

export default curryRight(groupBy)
