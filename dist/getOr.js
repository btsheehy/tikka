import curryRight from './curryRight.js';
import get from './get.js';

/**
 * Reads a property from an object, with a fallback when the key is missing.
 * @param obj - Object to inspect.
 * @param prop - Property key to read.
 * @param defaultValue - Value returned when `obj` does not own `prop`.
 * @returns Existing property value, or `defaultValue` when absent.
 *
 * @example
 * getOr('guest', 'role', { name: 'Lin' }) // 'guest'
 */
function getOr(obj, prop, defaultValue) {
    if (Object.hasOwn(obj, prop))
        return get(prop, obj);
    return defaultValue;
}
var getOr$1 = /*#__PURE__*/ curryRight(getOr);

export { getOr$1 as default };
//# sourceMappingURL=getOr.js.map
