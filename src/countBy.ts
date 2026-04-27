import curryRight from './curryRight'

/**
 * Counts items in an array by a derived key.
 * @param arr - Items to count.
 * @param iteratee - Function that maps each item to a bucket key.
 * @returns An object where each key stores the number of matching items.
 *
 * @example
 * countBy((word) => word.length.toString(), ['a', 'to', 'cat'])
 */

const countBy = <T>(arr: T[], iteratee: (value: T) => string): Record<string, number> => {
  const counts: Record<string, number> = {}
  let index = 0

  while (index < arr.length) {
    const key = iteratee(arr[index])
    counts[key] = (counts[key] ?? 0) + 1
    index += 1
  }

  return counts
}

type CountBy = {
  <T>(iteratee: (value: T) => string, arr: T[]): Record<string, number>
  <T>(iteratee: (value: T) => string): (arr: T[]) => Record<string, number>
}

const countByCurried = /*#__PURE__*/ curryRight(countBy) as CountBy

export default countByCurried
