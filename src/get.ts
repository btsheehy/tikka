import curryRight from './curryRight'

/**
 * Gets property by key.
 *
 * @example
 * get('a', { a: 1 }) // 1
 */
const getImpl = <T, K extends keyof T>(object: T, property: K): T[K] => object[property]

type Get = {
  <T, K extends keyof T>(property: K, object: T): T[K]
  <K extends PropertyKey>(property: K): <T extends Record<K, unknown>>(object: T) => T[K]
}

const get = /*#__PURE__*/ curryRight(getImpl) as Get

export default get
