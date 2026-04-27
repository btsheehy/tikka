import curryRight from './curryRight'
import map from './map'
import mapValues from './mapValues'
import type from './type'

/**
 * Recursively maps every leaf value in a nested array/object structure.
 * @param data - Nested structure to transform.
 * @param func - Mapper applied to each leaf value.
 * @returns A new structure with the same shape and transformed leaves.
 *
 * @example
 * deepMap((n) => n * 10, { a: 1, b: [2, 3] })
 */
function deepMap<T, R>(data: Array<T>, func: (x: T) => R): Array<R>
function deepMap(data: object, func: (x: unknown) => unknown): object

function deepMap(data: unknown, func: (x: unknown) => unknown) {
  const recurseFunc = (value: unknown): unknown => {
    if (type(value) === 'Array') {
      return map((entry: unknown) => recurseFunc(entry), value as unknown[])
    }

    if (type(value) === 'Object') {
      return mapValues((entry: unknown) => recurseFunc(entry), value as Record<string, unknown>)
    }

    return func(value)
  }

  return recurseFunc(data)
}

export default /*#__PURE__*/ curryRight(deepMap)
