import curryRight from './curryRight'
import get from './get'

/**
 * Groups array values by string key.
 *
 * @example
 * groupBy((x)=>x%2?'odd':'even', [1,2,3])
 */
type Grouper<T, K extends keyof T = keyof T> = K | ((x: T) => string | number)

type GroupBy = {
  <T>(grouper: (x: T) => string | number, arr: T[]): Record<string, T[]>
  <T, K extends keyof T>(grouper: K, arr: T[]): Record<string, T[]>
  <T>(grouper: (x: T) => string | number): (arr: T[]) => Record<string, T[]>
  <K extends string | number>(
    grouper: K
  ): <T extends Record<K, string | number>>(arr: T[]) => Record<string, T[]>
}

const groupByImpl = <T, K extends keyof T>(
  arr: T[],
  grouper: Grouper<T, K>
): Record<string, T[]> => {
  const groupingFunction = typeof grouper === 'function' ? grouper : get(grouper)

  const groups = {} as Record<string, T[]>
  let i = 0
  while (i < arr.length) {
    const group = groupingFunction(arr[i]).toString()
    if (groups[group]) groups[group].push(arr[i])
    else groups[group] = [arr[i]]
    i++
  }
  return groups
}

const groupBy = /*#__PURE__*/ curryRight(groupByImpl) as GroupBy

export default groupBy
