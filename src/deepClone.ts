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

function cloneValue(val: any) {
  if (type(val) === 'Date') return new Date(val.valueOf())
  if (type(val) === 'RegExp') return cloneRegex(val)
  else return val
}

function deepClone<T>(data: Array<T>): Array<T>
function deepClone<T>(data: object): object
function deepClone(data: any): any {
  deepMap(data, cloneValue)
}

export default deepClone
