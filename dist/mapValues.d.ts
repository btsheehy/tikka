type MapValues = {
    <T extends Record<string, unknown>, R>(fn: (x: T[keyof T]) => R, obj: T): Record<keyof T, R>;
    <T extends Record<string, unknown>, R>(fn: (x: T[keyof T]) => R): (obj: T) => Record<keyof T, R>;
};
declare const mapValuesCurried: MapValues;
export default mapValuesCurried;
//# sourceMappingURL=mapValues.d.ts.map