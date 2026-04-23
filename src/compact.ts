import filter from './filter'

/**
 * Removes `null`, `undefined`, and `NaN` values from an array.
 */
const compact = <T>(arr: Array<T | null | undefined>) => {
  const pred = (el: T) => {
    if (el === undefined) return false
    if (el === null) return false
    if (Number.isNaN(el)) return false
    return true
  }
  return filter(pred, arr) as T[]
}

export default compact
