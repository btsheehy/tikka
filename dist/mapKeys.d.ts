type MapKeys = {
    <T extends object, K extends keyof T, R extends string>(fn: (x: K) => R, obj: T): Record<R, T[K]>;
    <T extends object, K extends keyof T, R extends string>(fn: (x: K) => R): (obj: T) => Record<R, T[K]>;
};
/**
 * Renames object keys while keeping the original values.
 * @param obj - Object to transform.
 * @param fn - Function that maps each original key to a new key.
 * @returns A new object keyed by `fn(key)` with original values preserved.
 *
 * @example
 * mapKeys((key) => key.toUpperCase(), { first: 1, second: 2 })
 */
declare const mapKeys: MapKeys;
export default mapKeys;
//# sourceMappingURL=mapKeys.d.ts.map