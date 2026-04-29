import curryRight from './curryRight'

const lowestBy = <T>(arr: T[], fn: (arg0: T) => number): T => {
  let li = 0
  let l = fn(arr[0])
  let i = 1
  while (i < arr.length) {
    const c = fn(arr[i])
    if (c < l) {
      l = c
      li = i
    }
    i++
  }
  return arr[li]
}

export default curryRight(lowestBy)
