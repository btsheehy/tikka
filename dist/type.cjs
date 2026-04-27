'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Returns a normalized runtime type label.
 * @param val - Value to inspect.
 * @returns `'Null'`, `'Undefined'`, or the internal tag (for example `'Array'`, `'Date'`).
 *
 * @example
 * type([1, 2, 3]) // 'Array'
 */
const type = (val) => {
    if (val === null)
        return 'Null';
    if (val === undefined)
        return 'Undefined';
    return Object.prototype.toString.call(val).slice(8, -1);
};

exports.default = type;
//# sourceMappingURL=type.cjs.map
