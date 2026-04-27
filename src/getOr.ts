/**
 * Reads a property from an object, with a fallback when the key is missing.
 * @param obj - Object to inspect.
 * @param prop - Property key to read.
 * @param defaultValue - Value returned when `obj` does not own `prop`.
 * @returns Existing property value, or `defaultValue` when absent.
 *
 * @example
 * getOr('guest', 'role', { name: 'Lin' }) // 'guest'
 */
import curryRight from './curryRight'
import get from './get'

function getOr<T, K extends keyof T, R>(obj: T, prop: K, defaultValue: R): T[K]
function getOr<_T, R>(obj: {}, prop: any, defaultValue: R): R

function getOr(obj: any, prop: any, defaultValue: any) {
  if (Object.hasOwn(obj, prop)) return get(prop, obj)
  return defaultValue
}

type GetOr = {
  <T, K extends keyof T, R>(defaultValue: R, prop: K, obj: T): T[K]
  <R>(defaultValue: R, prop: PropertyKey, obj: {}): R
  <T, K extends keyof T, R>(defaultValue: R, prop: K): (obj: T) => T[K]
  <R>(defaultValue: R, prop: PropertyKey): (obj: {}) => R
}

const getOrCurried = /*#__PURE__*/ curryRight(getOr) as GetOr

export default getOrCurried
