import curryRight from './curryRight'

const take = (arr, number) => {
  return arr.slice(0, number)
}

export default curryRight(take)
