import curryRight from './curryRight'

const contains = (arr, value) => {
  let i = 0
  let length = arr.length
  while (i < length) {
    if (arr[i] === value) return true
    i++
  }
  return false
}

export default curryRight(contains)
