import curryRight from './curryRight'

const map = (arr, fn) => arr.map(el => fn(el))

export default curryRight(map)
