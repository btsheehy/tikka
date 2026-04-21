/**
 * Concatenates arrays or strings.
 *
 * @example
 * concat([1,2], [3,4]) // [1,2,3,4]
 */
function concat<T>(left: T[], right: T[]): T[]
function concat(left: string, right: string): string

function concat(left: any, right: any) {
  return left.concat(right)
}

export default concat
