/**
 * Returns final element/character.
 * @param a - Input value for a.
 * @returns The computed result.
 *
 * @example
 * last(a)
 */
function last<T>(a: T[]): T
function last(a: string): string

function last(arr: any) {
  const l = arr.length
  return arr[l - 1]
}

export default last
