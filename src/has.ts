/**
 * has utility function.
 */
import curryRight from './curryRight'

const has = (obj: {}, prop: string) => Object.hasOwn(obj, prop)

export default /*#__PURE__*/ curryRight(has)
