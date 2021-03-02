import curryRight from './curryRight'

interface Searchable {
  includes: (a: any) => boolean
}

const contains = <T extends Searchable>(searchTarget: T, value: any): boolean =>
  searchTarget.includes(value)

export default curryRight(contains)
