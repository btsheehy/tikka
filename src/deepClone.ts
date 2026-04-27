import deepMap from './deepMap'
import type from './type'

/**
 * Deeply clones arrays and plain objects, including `Date` and `RegExp` values.
 * @param data - Structure to clone.
 * @returns A new structure with recursively copied nested values.
 *
 * @example
 * const copy = deepClone({ createdAt: new Date(), tags: ['a'] })
 */
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
