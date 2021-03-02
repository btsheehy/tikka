import curryRight from './curryRight'
import filter from './filter'

const countWhere = <T>(arr: Array<T>, test: (T) => boolean) => {
  return filter(test, arr).length
}

export default curryRight(countWhere)
