import curryRight from './curryRight'

const groupBy = (arr, groupingFunction) => {
  return arr.reduce((acc, val) => {
    const group = groupingFunction(val)
    if (acc[group]) acc[group].concat(val)
    else acc[group] = [val]
    return acc
  }, {})
}

export default curryRight(groupBy)
