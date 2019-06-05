import curryRight from './curryRight'

const contains = (searchTarget, value) => {
  if (Array.isArray(searchTarget)) {
    let i = 0
    let length = arr.length
    while (i < length) {
      if (arr[i] === value) return true
      i++
    }
    return false
  } else {
    return searchTarget.indexOf(value) > -1
  }
}

export default curryRight(contains)
