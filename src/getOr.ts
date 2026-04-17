import curryRight from './curryRight'
import get from './get'

function getOr<T, K extends keyof T, R>(obj: T, prop: K, defaultValue: R): T[K]
function getOr<T, R>(obj: {}, prop: any, defaultValue: R): R

function getOr(obj: any, prop: any, defaultValue: any) {
  if (Object.hasOwn(obj, prop)) return get(prop, obj)
  return defaultValue
}

export default curryRight(getOr)
