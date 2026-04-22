/**
 * Sorts an array of objects by either a field name or a value-selector function, using `'asc'` or `'desc'` direction.
 *
 * @example
 * sortBy('age', 'desc', [{age:1},{age:3},{age:2}]) // [{age:3},{age:2},{age:1}]
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