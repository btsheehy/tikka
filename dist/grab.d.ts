type Grab = {
    <T, K extends keyof T>(props: readonly K[], data: T): Partial<Pick<T, K>>;
    <T, K extends keyof T>(props: readonly K[], data: T[]): Array<Partial<Pick<T, K>>>;
    <K extends PropertyKey>(props: readonly K[]): {
        <T extends Record<K, any>>(data: T): Partial<Pick<T, K>>;
        <T extends Record<K, any>>(data: T[]): Array<Partial<Pick<T, K>>>;
    };
};
/**
 * Picks a subset of keys from an object or each object in an array.
 * @param data - Source object or array of objects.
 * @param props - Keys to keep.
 * @returns A partial object (or array of partial objects) containing only `props`.
 *
 * @example
 * grab(['id', 'name'], [{ id: 1, name: 'Ada', admin: true }])
 */
declare const grab: Grab;
export default grab;
//# sourceMappingURL=grab.d.ts.map