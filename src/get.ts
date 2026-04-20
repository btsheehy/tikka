import curryRight from './curryRight'

/**
 * Gets property by key.
 *
 * @example
 * get('a', { a: 1 }) // 1
 */
const get = <T, K extends keyof T>(object: T, property: K) => object[property]

export default /*#__PURE__*/ curryRight(get)
