import curry from './curry'

/**
 * Concatenates two arrays or two strings.
 * @param left - First array/string segment.
 * @param right - Second array/string segment.
 * @returns A combined array/string; throws when argument types differ.
 *
 * @example
 * concat('tikka-', 'js') // 'tikka-js'
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
