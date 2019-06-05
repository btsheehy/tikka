import curryRight from './curryRight'

const concat = (original, addition) => original.concat(addition)

export default curryRight(concat)
