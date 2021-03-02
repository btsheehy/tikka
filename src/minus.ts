import curryRight from './curryRight'

const minus = (a: number, b: number) => a - b

export default curryRight(minus)
