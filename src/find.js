import curryRight from './curryRight'
import findIndex from './findIndex'

const find = (arr, findFunc) => {
  const i = findIndex(findFunc, arr)
  if (i > -1) return arr[i]
  return undefined
}

export default curryRight(find)
