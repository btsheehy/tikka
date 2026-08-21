import curryRight from './curryRight'
import get from './get'

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
    const group = String(groupingFunction(arr[i]))
    if (groups[group]) groups[group].push(arr[i])
    else groups[group] = [arr[i]]
    i++
  }
  return groups
}

/**
 * Groups array items by a key function or object property.
 * @param arr - Items to group.
 * @param grouper - Property name or function that returns each item's group key.
 * @returns An object whose keys are group names and values are grouped items.
 *
 * @example
 * groupBy('status', [{ status: 'open' }, { status: 'closed' }, { status: 'open' }])
 */
const groupBy = /*#__PURE__*/ curryRight(groupByImpl) as GroupBy

export default groupBy
