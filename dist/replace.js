import curryRight from './curryRight.js';
import identical from './identical.js';
import map from './map.js';

const replace = ((target, replacee, replacement) => {
    if (Array.isArray(target)) {
        const replacementFunc = (typeof replacement === 'function' ? replacement : () => replacement);
        const replacementTestFunc = (typeof replacee === 'function' ? replacee : identical(replacee));
        const replaceFunc = (val) => {
            if (replacementTestFunc(val))
                return replacementFunc(val);
            return val;
        };
        return map(replaceFunc, target);
    }
    return target.replaceAll(replacee, replacement);
});
var replace$1 = /*#__PURE__*/ curryRight(replace);

export { replace$1 as default };
//# sourceMappingURL=replace.js.map
