/**
 * Returns the final element of an array or final character of a string.
 * @param value - Array or string to read.
 * @returns Last item/character from `value`.
 *
 * @example
 * last('tikka') // 'a'
 */
function last<T>(a: T[]): T
function last(a: string): string

function last(arr: any) {
  const l = arr.length
  return arr[l - 1]
}

export default last
