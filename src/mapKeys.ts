/**
 * Renames object keys while keeping the original values.
 * @param obj - Object to transform.
 * @param fn - Function that maps each original key to a new key.
 * @returns A new object keyed by `fn(key)` with original values preserved.
 *
 * @example
 * mapKeys((key) => key.toUpperCase(), { first: 1, second: 2 })
 */
import curryRight from './curryRight'

const mapKeysImpl = <T extends object, K extends keyof T, R extends string>(
  obj: T,
  fn: (x: K) => R
): Record<R, T[K]> => {
  const keys = Object.keys(obj) as K[]
  const newObj = {} as Record<R, T[K]>

  keys.forEach((k) => {
    newObj[fn(k)] = obj[k]
  })

  return newObj
}

type MapKeys = {
  <T extends object, K extends keyof T, R extends string>(fn: (x: K) => R, obj: T): Record<R, T[K]>
  <T extends object, K extends keyof T, R extends string>(
    fn: (x: K) => R
  ): (obj: T) => Record<R, T[K]>
}

const mapKeys = /*#__PURE__*/ curryRight(mapKeysImpl) as MapKeys

export default mapKeys
