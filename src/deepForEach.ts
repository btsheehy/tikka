// experimental
import curryRight from './curryRight'
import forEach from './forEach'
import forEachValues from './mapValues'
import type from './type'

function deepForEach<T>(data: Array<T>, func: (value: T) => any): void
function deepForEach(data: object, func: (value: any) => any): void

function deepForEach(data: any, func: (value: any) => any) {
  const recurseFunc = (data: any) => {
    if (type(data) === 'Array') return forEach(func, data)
    if (type(data) === 'Object') return forEachValues(func, data)
    return func(data)
  }
  recurseFunc(data)
}

export default curryRight(deepForEach)
