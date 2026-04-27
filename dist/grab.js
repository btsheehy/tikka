import curryRight from './curryRight.js';
import get from './get.js';

/**
 * grab utility function.
 * @param obj - Input value for obj.
 * @param props - Input value for props.
 * @returns The computed result.
 *
 * @example
 * grabFromOne(obj, props)
 */
const grabFromOne = (obj, props) => {
    const result = {};
    return props.reduce((acc, p) => {
        acc[p] = get(p, obj);
        return acc;
    }, result);
};
function grabImpl(data, props) {
    if (Array.isArray(data)) {
        return data.map((item) => grabFromOne(item, props));
    }
    return grabFromOne(data, props);
}
const grab = /*#__PURE__*/ curryRight(grabImpl);

export { grab as default };
//# sourceMappingURL=grab.js.map
