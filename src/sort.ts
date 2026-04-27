import curryRight from './curryRight'

/**
 * Sorts an array by a computed key without mutating the input.
 * @param arr - Array to sort.
 * @param iteratee - Function that computes the sortable value for each item.
 * @returns A new array sorted ascending by `iteratee(item)`.
 *
 * @example
 * sort((user) => user.age, users)
 */

const sort = <T, U>(arr: T[], iteratee: (value: T) => U): T[] => {
  return [...arr].sort((left, right) => {
    const leftValue = iteratee(left)
    const rightValue = iteratee(right)

    if (leftValue > rightValue) {
      return 1
    }

    if (leftValue < rightValue) {
      return -1
    }

    return 0
  })
}

export default /*#__PURE__*/ curryRight(sort)
