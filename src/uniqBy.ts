import curryRight from './curryRight'

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

type UniqBy = {
  <T, U>(uniqCond: (x: T) => U, arr: T[]): T[]
  <T, U>(uniqCond: (x: T) => U): (arr: T[]) => T[]
}

/**
 * Removes duplicates based on a derived key function.
 * @param arr - Source array.
 * @param uniqCond - Function that computes each item's uniqueness key.
 * @returns A new array containing the first item seen for each key.
 *
 * @example
 * uniqBy((user) => user.id, [{ id: 1 }, { id: 1 }, { id: 2 }])
 */
const uniqByCurried = /*#__PURE__*/ curryRight(uniqBy) as UniqBy

export default uniqByCurried
