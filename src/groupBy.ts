import curryRight from './curryRight'

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

const groupByImpl = <T, K extends keyof T>(arr: T[], grouper: Grouper<T, K>): Record<string, T[]> => {
  const groupingFunction =
    typeof grouper === 'function'
      ? grouper
      : (item: T) => {
          const value = item[grouper]
          if (typeof value === 'string' || typeof value === 'number') {
            return value
          }
          return String(value)
        }

  return arr.reduce<Record<string, T[]>>((acc, value) => {
    const group = String(groupingFunction(value))
    if (acc[group]) {
      acc[group].push(value)
    } else {
      acc[group] = [value]
    }
    return acc
  }, {})
}

const groupBy = /*#__PURE__*/ curryRight(groupByImpl) as GroupBy

export default groupBy
