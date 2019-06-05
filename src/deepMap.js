// experimental
import curryRight from './curryRight'
import map from './map'
import mapValues from './mapValues'
import type from './type'

const deepMap = (data, func) => {
  const recurseFunc = data => {
    if (type(data) === 'Array') return map(func, data)
    if (type(data) === 'Object') return mapValues(func, data)
    return func(data)
  }
  return recurseFunc(data)
}

export default curryRight(deepMap)
