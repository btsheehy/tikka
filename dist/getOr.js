import curryRight from './curryRight.js';
import get from './get.js';

/**
 * getOr utility function.
 */
function getOr(obj, prop, defaultValue) {
    if (Object.hasOwn(obj, prop))
        return get(prop, obj);
    return defaultValue;
}
var getOr$1 = /*#__PURE__*/ curryRight(getOr);

export { getOr$1 as default };
//# sourceMappingURL=getOr.js.map
