/**
 * has utility function.
 * @param obj - Input value for obj.
 * @param prop - Input value for prop.
 * @returns The computed result.
 *
 * @example
 * has(obj, prop)
 */
import curryRight from './curryRight'

const has = (obj: {}, prop: string) => Object.hasOwn(obj, prop)

export default /*#__PURE__*/ curryRight(has)
