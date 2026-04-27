import curry from './curry'

/**
 * Concatenates arrays or strings.
 *
 * @example
 * concat([1,2], [3,4]) // [1,2,3,4]
 * @param left - Input value for left.
 * @param right - Input value for right.
 * @returns The computed result.
 */
function concatRaw<T>(left: T[], right: T[]): T[]
function concatRaw(left: string, right: string): string
function concatRaw<T>(left: T[] | string, right: T[] | string) {
  if (typeof left === 'string' && typeof right === 'string') {
    return left.concat(right)
  }

  if (Array.isArray(left) && Array.isArray(right)) {
    return left.concat(right)
  }

  throw new TypeError('concat expects both arguments to be arrays or both to be strings')
}

type Concat = {
  <T>(left: T[], right: T[]): T[]
  <T>(left: T[]): (right: T[]) => T[]
  (left: string, right: string): string
  (left: string): (right: string) => string
}

const concat = /*#__PURE__*/ curry(concatRaw) as Concat

export default concat
