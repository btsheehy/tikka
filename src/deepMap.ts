// experimental
import curryRight from './curryRight'
import map from './map'
import mapValues from './mapValues'
import type from './type'

function deepMap<T, R>(data: Array<T>, func: (x: T) => R): Array<R>
function deepMap(data: object, func: (x: any) => any): object

function deepMap(data: any, func: Function) {
  const recurseFunc = (data: any) => {
    if (type(data) === 'Array') return map(func, data)
    if (type(data) === 'Object') return mapValues(func, data)
    return func(data)
  }
  return recurseFunc(data)
}

export default curryRight(deepMap)
