import curryRight from './curryRight'
import map from './map'
import mapValues from './mapValues'
import type from './type'

/**
 * Recursively maps leaf values in nested arrays/objects.
 * @param data - Input value for data.
 * @param func - Input value for func.
 * @returns The computed result.
 *
 * @example
 * deepMap(data, func)
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
