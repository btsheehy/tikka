/**
 * Returns everything except the first element/character.
 *
 * @example
 * tail([1,2,3]) // [2,3]
 * @param arr - Input value for arr.
 * @returns The computed result.
 */
function tail<T>(arr: T[]): T[]
function tail(str: string): string

function tail(value: any) {
  return value.slice(1)
}

export default tail
