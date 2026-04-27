/**
 * Deep-flattens nested arrays into a single-level array.
 * @param arr - Potentially nested array.
 * @returns A new array containing all nested values in traversal order.
 *
 * @example
 * flatten([1, [2, [3]], 4]) // [1, 2, 3, 4]
 */
const flatten = <T>(arr: T[]) => {
  const result: any[] = []
  const flat = (val: any): void => {
    if (!Array.isArray(val)) result.push(val)
    else {
      let i = 0
      const length = val.length
      while (i < length) {
        if (Array.isArray(val[i])) val[i].forEach(flat)
        else result.push(val[i])
        i++
      }
    }
  }
  flat(arr)
  return result
}

export default flatten
