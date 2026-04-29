import curryRight from './curryRight'

const remove = <T>(arr: T[], pred: (T) => boolean): T[] => {
  const result = []
  let i = 0
  while (i < arr.length) {
    if (!pred(arr[i])) result.push(arr[i])
    i++
  }
  return result
}

export default curryRight(remove)
