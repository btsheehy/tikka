type GetOr = {
    <T, K extends keyof T, R>(defaultValue: R, prop: K, obj: T): T[K];
    <R>(defaultValue: R, prop: PropertyKey, obj: {}): R;
    <T, K extends keyof T, R>(defaultValue: R, prop: K): (obj: T) => T[K];
    <R>(defaultValue: R, prop: PropertyKey): (obj: {}) => R;
};
/**
 * Reads a property from an object, with a fallback when the key is missing.
 * @param obj - Object to inspect.
 * @param prop - Property key to read.
 * @param defaultValue - Value returned when `obj` does not own `prop`.
 * @returns Existing property value, or `defaultValue` when absent.
 *
 * @example
 * getOr('guest', 'role', { name: 'Lin' }) // 'guest'
 */
declare const getOrCurried: GetOr;
export default getOrCurried;
//# sourceMappingURL=getOr.d.ts.map