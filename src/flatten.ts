/**
 * Deep-flattens nested arrays.
 * @param arr - Input value for arr.
 * @returns The computed result.
 *
 * @example
 * flatten(arr)
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
