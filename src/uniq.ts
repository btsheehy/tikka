/**
 * uniq utility function.
 * @param arr - Input value for arr.
 * @returns The computed result.
 *
 * @example
 * uniq(arr)
 */
const uniq = <T>(arr: T[]): T[] => Array.from(new Set(arr))

export default uniq
