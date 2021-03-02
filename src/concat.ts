import curryRight from './curryRight'

const concat = <T>(original: Array<T>, addition: T) => original.concat(addition)

export default curryRight(concat)
