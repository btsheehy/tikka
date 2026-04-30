/**
 * Deeply clones arrays and plain objects, including `Date` and `RegExp` values.
 * @param data - Structure to clone.
 * @returns A new structure with recursively copied nested values.
 *
 * @example
 * const copy = deepClone({ createdAt: new Date(), tags: ['a'] })
 */
declare function deepClone<T>(data: Array<T>): Array<T>;
declare function deepClone<T extends object>(data: T): T;
export default deepClone;
//# sourceMappingURL=deepClone.d.ts.map