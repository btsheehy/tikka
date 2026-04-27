import curryRight from './curryRight'
import get from './get'

/**
 * Sorts object arrays by a property key or accessor in ascending/descending order.
 * @param arr - Array of objects to sort.
 * @param direction - Sort order: `'asc'` or `'desc'`.
 * @param fieldOrIteratee - Property key or accessor used to compute sort values.
 * @returns A new sorted array; original input array is unchanged.
 *
 * @example
 * sortBy('age', 'desc', [{ age: 1 }, { age: 3 }, { age: 2 }])
 */

export type SortDirection = 'asc' | 'desc'

const sortBy = <T extends Record<string, unknown>, K extends keyof T>(
  arr: T[],
  direction: SortDirection,
  fieldOrIteratee: K | ((value: T) => unknown)
): T[] => {
  const directionMultiplier = direction === 'desc' ? -1 : 1
  const accessor =
    typeof fieldOrIteratee === 'function'
      ? fieldOrIteratee
      : (value: T) => get(fieldOrIteratee, value)

  return [...arr].sort((left, right) => {
    const leftValue = accessor(left)
    const rightValue = accessor(right)

    if (leftValue > rightValue) {
      return 1 * directionMultiplier
    }

    if (leftValue < rightValue) {
      return -1 * directionMultiplier
    }

    return 0
  })
}

type SortBy = {
  <T extends Record<string, unknown>, K extends keyof T>(
    fieldOrIteratee: K | ((value: T) => unknown),
    direction: SortDirection,
    arr: T[]
  ): T[]
  <T extends Record<string, unknown>, K extends keyof T>(
    fieldOrIteratee: K | ((value: T) => unknown),
    direction: SortDirection
  ): (arr: T[]) => T[]
}

const sortByCurried = /*#__PURE__*/ curryRight(sortBy) as SortBy

export default sortByCurried
