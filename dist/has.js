import curryRight from './curryRight.js';

const has = (obj, prop) => Object.hasOwn(obj, prop);
/**
 * Checks whether an object owns a property key.
 * @param obj - Object to inspect.
 * @param prop - Property key to check.
 * @returns `true` when `obj` has `prop` as its own property.
 *
 * @example
 * has('id', { id: 5, name: 'Ada' }) // true
 */
const hasCurried = /*#__PURE__*/ curryRight(has);

export { hasCurried as default };
//# sourceMappingURL=has.js.map
