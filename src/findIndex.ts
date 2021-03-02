import curryRight from './curryRight'

const findIndex = <T>(arr: Array<T>, findFunc: (x: T) => boolean) => {
  let i = 0
  let length = arr.length
  while (i < length) {
    if (findFunc(arr[i])) return i
    i++
  }
  return -1
}

export default curryRight(findIndex)
