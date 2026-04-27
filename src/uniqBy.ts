import curryRight from './curryRight'

/**
 * Returns unique items by computed key.
 *
 * @example
 * uniqBy((x)=>x.id, [{id:1},{id:1},{id:2}])
 * @param arr - Input value for arr.
 * @param uniqCond - Input value for uniqCond.
 * @returns The computed result.
 */
const uniqBy = <T, U>(arr: T[], uniqCond: (x: T) => U): T[] => {
  const uniqBy: Set<U> = new Set()
  const newArr: T[] = []
  let i = 0
  while (i < arr.length) {
    const uniqByVal = uniqCond(arr[i])
    if (!uniqBy.has(uniqByVal)) {
      newArr.push(arr[i])
      uniqBy.add(uniqByVal)
    }
    i++
  }
  return newArr
}

export default /*#__PURE__*/ curryRight(uniqBy)
