/**
 * mapKeys utility function.
 * @param obj - Input value for obj.
 * @param fn - Input value for fn.
 * @returns The computed result.
 *
 * @example
 * mapKeysImpl(obj, fn)
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
  <T extends object, K extends keyof T, R extends string>(fn: (x: K) => R): (obj: T) => Record<R, T[K]>
}

const mapKeys = /*#__PURE__*/ curryRight(mapKeysImpl) as MapKeys

export default mapKeys
