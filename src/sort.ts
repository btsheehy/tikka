import curryRight from './curryRight'

/**
 * Sorts an array by a computed key (non-mutating).
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
