import curryRight from './curryRight'

const forEach = <T>(arr: T[], func: (x: T) => any) => {
  arr.forEach(val => func(val))
  return arr
}

export default curryRight(forEach)
