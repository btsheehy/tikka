import curryRight from './curryRight'

const forEach = (arr, func) => {
  arr.forEach(val => func(val))
  return arr
}

export default curryRight(forEach)
