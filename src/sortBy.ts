import curryRight from './curryRight'
import get from './get'

/**
 * Sorts an array of objects by either a field name or a value-selector function, using `'asc'` or `'desc'` direction.
 *
 * @example
 * sortBy('age', 'desc', [{age:1},{age:3},{age:2}]) // [{age:3},{age:2},{age:1}]
 * @param _unused - This function takes no explicit parameters.
 * @returns The computed result.
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

export default /*#__PURE__*/ curryRight(sortBy)
