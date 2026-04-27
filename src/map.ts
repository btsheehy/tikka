import curryRight from './curryRight'

/**
 * Maps array values.
 *
 * @example
 * map((x)=>x*2, [1,2,3]) // [2,4,6]
 * @param arr - Input value for arr.
 * @param fn - Input value for fn.
 * @returns The computed result.
 */
const map = <T, R>(arr: T[], fn: (x: T) => R): R[] => {
  const result = new Array<R>(arr.length)
  let index = 0

  while (index < arr.length) {
    result[index] = fn(arr[index])
    index += 1
  }

  return result
}

export default /*#__PURE__*/ curryRight(map)
