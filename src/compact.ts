import filter from './filter'

const compact = <T>(arr: Array<T | null | undefined>) => {
  return filter((value: T | null | undefined) => value != null, arr) as T[]
}

export default compact
