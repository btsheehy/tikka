/**
 * pluck utility function.
 * @param collection - Input value for collection.
 * @param prop - Input value for prop.
 * @returns The computed result.
 *
 * @example
 * pluckImpl(collection, prop)
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
