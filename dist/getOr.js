import curryRight from './curryRight.js';
import get from './get.js';

/**
 * getOr utility function.
 * @param obj - Input value for obj.
 * @param prop - Input value for prop.
 * @param defaultValue - Input value for defaultValue.
 * @returns The computed result.
 *
 * @example
 * getOr(obj, prop, defaultValue)
 */
function getOr(obj, prop, defaultValue) {
    if (Object.hasOwn(obj, prop))
        return get(prop, obj);
    return defaultValue;
}
var getOr$1 = /*#__PURE__*/ curryRight(getOr);

export { getOr$1 as default };
//# sourceMappingURL=getOr.js.map
