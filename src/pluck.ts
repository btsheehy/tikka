/**
 * Extracts one property from every object in a collection.
 * @param collection - Array of source objects.
 * @param prop - Property name to read from each item.
 * @returns Array of values for `prop`, preserving item order.
 *
 * @example
 * pluck('id', [{ id: 1 }, { id: 2 }]) // [1, 2]
 */
import curryRight from './curryRight'

const pluckImpl = <T, K extends keyof T>(collection: T[], prop: K): T[K][] =>
  collection.map((item) => item[prop])

type Pluck = {
  <T, K extends keyof T>(prop: K, collection: T[]): T[K][]
  <K extends PropertyKey>(prop: K): <T extends Record<K, unknown>>(collection: T[]) => T[K][]
}

const pluck = /*#__PURE__*/ curryRight(pluckImpl) as Pluck

export default pluck
