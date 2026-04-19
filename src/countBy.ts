import curryRight from './curryRight'

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

export default /*#__PURE__*/ curryRight(countBy)
