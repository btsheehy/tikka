import deepMap from './deepMap.js';
import type from './type.js';

/**
 * Deep-clones arrays/objects recursively (supports Date and RegExp cloning).
 */
const cloneRegex = (regex) => {
    return new RegExp(regex.source, (regex.global ? 'g' : '') +
        (regex.ignoreCase ? 'i' : '') +
        (regex.multiline ? 'm' : '') +
        (regex.sticky ? 'y' : '') +
        (regex.unicode ? 'u' : ''));
};
function cloneValue(val) {
    if (type(val) === 'Date')
        return new Date(val.valueOf());
    if (type(val) === 'RegExp')
        return cloneRegex(val);
    return val;
}
function deepClone(data) {
    return deepMap(cloneValue, data);
}

export { deepClone as default };
//# sourceMappingURL=deepClone.js.map
