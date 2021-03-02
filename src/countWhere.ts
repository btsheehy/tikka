import curryRight from './curryRight'
import filter from './filter'

const countWhere = <T>(arr: Array<T>, test: (x: T) => boolean): number => {
  return filter(test, arr).length
}

export default curryRight(countWhere)
