type Map = {
    <T, R>(fn: (x: T) => R, arr: T[]): R[];
    <T, R>(fn: (x: T) => R): (arr: T[]) => R[];
};
/**
 * Maps each array item to a new value.
 * @param arr - Source array.
 * @param fn - Mapper applied to each element.
 * @returns A new array with transformed values.
 *
 * @example
 * map((n) => n * 2, [1, 2, 3]) // [2, 4, 6]
 */
declare const mapCurried: Map;
export default mapCurried;
//# sourceMappingURL=map.d.ts.map