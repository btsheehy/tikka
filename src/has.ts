/**
 * Checks whether an object owns a property key.
 * @param obj - Object to inspect.
 * @param prop - Property key to check.
 * @returns `true` when `obj` has `prop` as its own property.
 *
 * @example
 * has('id', { id: 5, name: 'Ada' }) // true
 */
import curryRight from './curryRight'

const has = (obj: {}, prop: string) => Object.hasOwn(obj, prop)

export default /*#__PURE__*/ curryRight(has)
