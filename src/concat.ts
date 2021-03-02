import curryRight from './curryRight'

const concat = (original: Array<any>, addition: any) =>
  original.concat(addition)

export default curryRight(concat)
