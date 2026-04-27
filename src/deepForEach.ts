import curryRight from './curryRight'
import forEach from './forEach'
import forEachValues from './forEachValues'
import type from './type'

/**
 * Walks nested arrays/objects and runs a callback for each leaf value.
 * @param data - Nested structure to traverse.
 * @param func - Callback called for each non-object/non-array leaf node.
 * @returns Nothing.
 *
 * @example
 * deepForEach((value) => console.log(value), { a: 1, b: [2, 3] })
 */
function deepForEach<T>(data: Array<T>, func: (value: T) => unknown): void
function deepForEach(data: object, func: (value: unknown) => unknown): void

function deepForEach(data: unknown, func: (value: unknown) => unknown) {
  const recurseFunc = (value: unknown): void => {
    if (type(value) === 'Array') {
      forEach((entry: unknown) => recurseFunc(entry), value as unknown[])
      return
    }

    if (type(value) === 'Object') {
      forEachValues((entry: unknown) => recurseFunc(entry), value as Record<string, unknown>)
      return
    }

    func(value)
  }

  recurseFunc(data)
}

type DeepForEach = {
  <T>(func: (value: T) => unknown, data: Array<T>): void
  (func: (value: unknown) => unknown, data: object): void
  <T>(func: (value: T) => unknown): (data: Array<T>) => void
  (func: (value: unknown) => unknown): (data: object) => void
}

const deepForEachCurried = /*#__PURE__*/ curryRight(deepForEach) as DeepForEach

export default deepForEachCurried
