import curryRight from './curryRight'

const findIndex = (arr, findFunc) => {
  let i = 0
  let length = arr.length
  while (i < length) {
    if (findFunc(arr[i])) return i
    i++
  }
  return undefined
}

export default curryRight(findIndex)
