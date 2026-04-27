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
function deepForEach<T>(data: Array<T>, func: (value: T) => void): void
function deepForEach<T extends object>(data: T, func: (value: any) => void): void

function deepForEach(data: any, func: (value: any) => void) {
  const recurseFunc = (value: any): void => {
    if (type(value) === 'Array') {
      forEach((entry) => recurseFunc(entry), value as any[])
      return
    }

    if (type(value) === 'Object') {
      forEachValues((entry) => recurseFunc(entry), value as Record<string, any>)
      return
    }

    func(value)
  }

  recurseFunc(data)
}

type DeepForEach = {
  <T>(func: (value: T) => void, data: Array<T>): void
  <T extends object>(func: (value: any) => void, data: T): void
  <T>(func: (value: T) => void): (data: Array<T>) => void
  <T extends object>(func: (value: any) => void): (data: T) => void
}

const deepForEachCurried = /*#__PURE__*/ curryRight(deepForEach) as DeepForEach

export default deepForEachCurried
