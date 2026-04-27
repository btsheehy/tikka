/**
 * Returns internal type label (for example: `Array`, `Object`, `Null`, `Undefined`).
 */
const type = (val) => {
    if (val === null)
        return 'Null';
    if (val === undefined)
        return 'Undefined';
    return Object.prototype.toString.call(val).slice(8, -1);
};

export { type as default };
//# sourceMappingURL=type.js.map
