import curryRight from './curryRight'
import filter from './filter'

const countWhere = (arr, test) => {
  return filter(test, arr).length
}

export default curryRight(countWhere)
