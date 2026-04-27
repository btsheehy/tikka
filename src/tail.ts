/**
 * Returns everything except the first element/character.
 * @param value - Array or string to slice.
 * @returns Array/string without its first entry.
 *
 * @example
 * tail([1, 2, 3]) // [2, 3]
 */
function tail<T>(arr: T[]): T[]
function tail(str: string): string

function tail(value: any) {
  return value.slice(1)
}

export default tail
