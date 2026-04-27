/**
 * Returns the first item in a tuple/array.
 * @param arr - Tuple/array with at least one element.
 * @returns The element at index `0`.
 *
 * @example
 * head(['first', 'second']) // 'first'
 */
const head = <T>(arr: [T]) => arr[0]

export default head
