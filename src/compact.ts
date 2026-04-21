import filter from './filter'

/**
 * Removes `null` and `undefined` values from an array.
 */
const compact = <T>(arr: Array<T | null | undefined>) => {
  return filter((value: T | null | undefined) => value != null, arr) as T[]
}

export default compact
