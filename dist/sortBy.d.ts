/**
 * Sorts object arrays by a property key or accessor in ascending/descending order.
 * @param arr - Array of objects to sort.
 * @param direction - Sort order: `'asc'` or `'desc'`.
 * @param fieldOrIteratee - Property key or accessor used to compute sort values.
 * @returns A new sorted array; original input array is unchanged.
 *
 * @example
 * sortBy('age', 'desc', [{ age: 1 }, { age: 3 }, { age: 2 }])
 */
export type SortDirection = 'asc' | 'desc';
declare const _default: {
    (c: unknown, b: unknown, a: unknown, ...extra: unknown[]): Record<string, unknown>[];
    (c: unknown, b: unknown): (a: unknown, ...extra: unknown[]) => Record<string, unknown>[];
    (c: unknown): {
        (b: unknown, a: unknown, ...extra: unknown[]): Record<string, unknown>[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => Record<string, unknown>[];
    };
};
export default _default;
//# sourceMappingURL=sortBy.d.ts.map