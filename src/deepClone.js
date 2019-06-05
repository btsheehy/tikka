import deepMap from './deepMap'
import type from './type'

const cloneRegex = regex => {
  return new RegExp(
    regex.source,
    (regex.global ? 'g' : '') +
      (regex.ignoreCase ? 'i' : '') +
      (regex.multiline ? 'm' : '') +
      (regex.sticky ? 'y' : '') +
      (regex.unicode ? 'u' : '')
  )
}

const cloneValue = val => {
  if (type(val) === 'Date') return new Date(val.valueOf())
  if (type(val) === 'RegExp') return cloneRegex(val)
  else return val
}

const deepClone = data => deepMap(data, cloneValue)

export default deepClone
