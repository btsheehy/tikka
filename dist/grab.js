import curryRight from './curryRight.js';
import get from './get.js';

/**
 * grab utility function.
 */
const grabFromOne = (obj, props) => {
    const result = {};
    return props.reduce((acc, p) => {
        acc[p] = get(p, obj);
        return acc;
    }, result);
};
function grab(data, props) {
    if (Array.isArray(data))
        return data.map((x) => grabFromOne(x, props));
    else
        return grabFromOne(data, props);
}
var grab$1 = /*#__PURE__*/ curryRight(grab);

export { grab$1 as default };
//# sourceMappingURL=grab.js.map
