import curryRight from './curryRight'

const min = (a: number, b: number): number => Math.min(a, b)

export default curryRight(min)
