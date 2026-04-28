import curryRight from './curryRight'
import map from './map'
import mapValues from './mapValues'
import type from './type'

function deepMap<T, R>(data: Array<T>, func: (x: T) => R): Array<R>
function deepMap<T extends object, R>(data: T, func: (x: any) => R): object

function deepMap(data: any, func: (x: any) => any) {
  const recurseFunc = (value: any): any => {
    if (type(value) === 'Array') {
      return map((entry) => recurseFunc(entry), value as any[])
    }

    if (type(value) === 'Object') {
      return mapValues((entry) => recurseFunc(entry), value as Record<string, any>)
    }

    return func(value)
  }

  return recurseFunc(data)
}

type DeepMap = {
  <T, R>(func: (x: T) => R, data: Array<T>): Array<R>
  <T extends object, R>(func: (x: any) => R, data: T): object
  <T, R>(func: (x: T) => R): (data: Array<T>) => Array<R>
  <T extends object, R>(func: (x: any) => R): (data: T) => object
}

/**
 * Recursively maps every leaf value in a nested array/object structure.
 * @param data - Nested structure to transform.
 * @param func - Mapper applied to each leaf value.
 * @returns A new structure with the same shape and transformed leaves.
 *
 * @example
 * deepMap((n) => n * 10, { a: 1, b: [2, 3] })
 */
const deepMapCurried = /*#__PURE__*/ curryRight(deepMap) as DeepMap

export default deepMapCurried
