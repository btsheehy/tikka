import curryRight from './curryRight.js';

/**
 * has utility function.
 * @param obj - Input value for obj.
 * @param prop - Input value for prop.
 * @returns The computed result.
 *
 * @example
 * has(obj, prop)
 */
const has = (obj, prop) => Object.hasOwn(obj, prop);
var has$1 = /*#__PURE__*/ curryRight(has);

export { has$1 as default };
//# sourceMappingURL=has.js.map
