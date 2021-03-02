import filter from './filter'

const compact = <T>(arr: T[]) => {
  filter((a) => a !== null, arr)
}
