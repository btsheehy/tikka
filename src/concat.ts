import curry from './curry'

/**
 * Concatenates arrays or strings.
 *
 * @example
 * concat([1,2], [3,4]) // [1,2,3,4]
 */
const concatRaw = <T>(left: T[] | string, right: T[] | string) => {
  return (left as any).concat(right as any)
}

type Concat = {
  <T>(left: T[], right: T[]): T[]
  <T>(left: T[]): (right: T[]) => T[]
  (left: string, right: string): string
  (left: string): (right: string) => string
}

const concat = /*#__PURE__*/ curry(concatRaw) as Concat

export default concat
