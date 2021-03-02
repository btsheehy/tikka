import curryRight from './curryRight'

const map = <T, R>(arr: T[], fn: (x: T) => R): R[] => arr.map(el => fn(el))

export default curryRight(map)
