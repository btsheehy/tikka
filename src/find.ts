import curryRight from './curryRight'
import findIndex from './findIndex'

const find = <T>(arr: Array<T>, findFunc: (x: T) => boolean) => {
  const i = findIndex(findFunc, arr)
  if (i > -1) return arr[i]
  return undefined
}

export default curryRight(find)
