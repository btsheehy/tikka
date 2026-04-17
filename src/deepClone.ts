import deepMap from './deepMap'
import type from './type'

const cloneRegex = (regex: RegExp) => {
  return new RegExp(
    regex.source,
    (regex.global ? 'g' : '') +
      (regex.ignoreCase ? 'i' : '') +
      (regex.multiline ? 'm' : '') +
      (regex.sticky ? 'y' : '') +
      (regex.unicode ? 'u' : '')
  )
}

function cloneValue(val: unknown) {
  if (type(val) === 'Date') return new Date((val as Date).valueOf())
  if (type(val) === 'RegExp') return cloneRegex(val as RegExp)
  return val
}

function deepClone<T>(data: Array<T>): Array<T>
function deepClone<T extends object>(data: T): T
function deepClone(data: unknown): unknown {
  return deepMap(cloneValue, data as object | unknown[])
}

export default deepClone
