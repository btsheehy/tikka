import curryRight from './curryRight'

const any = (arr, test) => {
  let i = 0
  let length = arr.length
  while (i < length) {
    const passes = test(val)
    if (passes) return true
    i++
  }

  return false
}

export default curryRight(any)
