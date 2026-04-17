import curryRight from './curryRight'
import forEach from './forEach'
import forEachValues from './forEachValues'
import type from './type'

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

export default /*#__PURE__*/ curryRight(deepForEach)
