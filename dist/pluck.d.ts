type Pluck = {
    <T, K extends keyof T>(prop: K, collection: T[]): T[K][];
    <K extends PropertyKey>(prop: K): <T extends Record<K, any>>(collection: T[]) => T[K][];
};
/**
 * Extracts one property from every object in a collection.
 * @param collection - Array of source objects.
 * @param prop - Property name to read from each item.
 * @returns Array of values for `prop`, preserving item order.
 *
 * @example
 * pluck('id', [{ id: 1 }, { id: 2 }]) // [1, 2]
 */
declare const pluck: Pluck;
export default pluck;
//# sourceMappingURL=pluck.d.ts.map