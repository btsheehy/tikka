import curryRight from './curryRight'

const max = (a: number, b: number): number => Math.max(a, b)

export default curryRight(max)
