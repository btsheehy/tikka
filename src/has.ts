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

type Has = {
  (prop: string, obj: {}): boolean
  (prop: string): (obj: {}) => boolean
}

const hasCurried = /*#__PURE__*/ curryRight(has) as Has

export default hasCurried
