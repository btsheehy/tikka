'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Returns internal type label (for example: `Array`, `Object`, `Null`, `Undefined`).
 * @param val - Input value for val.
 * @returns The computed result.
 *
 * @example
 * type(val)
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
