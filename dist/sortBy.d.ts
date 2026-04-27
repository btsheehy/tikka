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
type SortBy = {
    <T extends Record<string, unknown>, K extends keyof T>(fieldOrIteratee: K | ((value: T) => unknown), direction: SortDirection, arr: T[]): T[];
    <T extends Record<string, unknown>, K extends keyof T>(fieldOrIteratee: K | ((value: T) => unknown), direction: SortDirection): (arr: T[]) => T[];
};
declare const sortByCurried: SortBy;
export default sortByCurried;
//# sourceMappingURL=sortBy.d.ts.map