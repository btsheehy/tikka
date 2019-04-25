import curryRight from './curryRight'

const any = (arr, test) => {
  let i = 0
  while (i <= arr.length) {
    const passes = test(val)
    if (passes) return true
  }

  return false
}

export default curryRight(any)
