import curryRight from './curryRight'
import get from './get'

function getOr<T, K extends keyof T>(obj: T, prop: K, defaultValue: any): T[K]
function getOr<T>(obj: {}, prop: String, defaultValue: T): T

function getOr(obj: any, prop: string, defaultValue: any) {
  if (obj.hasOwnProperty(prop)) return get(prop, obj)
  return defaultValue
}

export default curryRight(getOr)
