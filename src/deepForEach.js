// experimental
import curryRight from './curryRight'
import forEach from './forEach'
import forEachValues from './mapValues'
import type from './type'

const deepForEach = (data, func) => {
  const recurseFunc = data => {
    if (type(data) === 'Array') return forEach(func, data)
    if (type(data) === 'Object') return forEachValues(func, data)
    return func(data)
  }
  return recurseFunc(data)
}

export default curryRight(deepForEach)
