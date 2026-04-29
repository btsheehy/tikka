import curryRight from './curryRight'

const highestBy = <T>(arr: T[], fn: (arg0: T) => number): T => {
  let hi = 0
  let h = fn(arr[0])
  let i = 1
  while (i < arr.length) {
    const c = fn(arr[i])
    if (c > h) {
      h = c
      hi = i
    }
    i++
  }
  return arr[hi]
}

export default curryRight(highestBy)
