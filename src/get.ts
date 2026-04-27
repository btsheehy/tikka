import curryRight from './curryRight'

/**
 * Reads a property from an object by key.
 * @param object - Object to read from.
 * @param property - Property key to retrieve.
 * @returns The value stored at `object[property]`.
 *
 * @example
 * get('name', { id: 1, name: 'Ada' }) // 'Ada'
 */
const getImpl = <T, K extends keyof T>(object: T, property: K): T[K] => object[property]

type Get = {
  <T, K extends keyof T>(property: K, object: T): T[K]
  <K extends PropertyKey>(property: K): <T extends Record<K, any>>(object: T) => T[K]
}

const get = /*#__PURE__*/ curryRight(getImpl) as Get

export default get
