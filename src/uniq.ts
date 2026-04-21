/**
 * uniq utility function.
 */
const uniq = <T>(arr: T[]): T[] => Array.from(new Set(arr))

export default uniq
