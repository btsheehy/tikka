import curryRight from './curryRight'

const filter = (arr, filterFunc) => arr.filter(filterFunc)

export default curryRight(filter)
