import curryRight from './curryRight'

const filter = (arr, filterFunc) => arr.filter(val => filterFunc(val))

export default curryRight(filter)
