import curryRight from './curryRight'

const take = <T>(arr: T[], num: number) => {
  return arr.slice(0, num)
}

export default curryRight(take)
