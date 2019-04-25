import curryRight from './curryRight'
import findIndex from './findIndex'

const find = (arr, findFunc) => {
  const i = findIndex(findFunc, arr)
  if (i) return arr[i]
  return undefined
}

export default curryRight(find)
