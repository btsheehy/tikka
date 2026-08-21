type GroupBy = {
    <T>(grouper: (x: T) => string | number, arr: T[]): Record<string, T[]>;
    <T, K extends keyof T>(grouper: K, arr: T[]): Record<string, T[]>;
    <T>(grouper: (x: T) => string | number): (arr: T[]) => Record<string, T[]>;
    <K extends string | number>(grouper: K): <T extends Record<K, string | number>>(arr: T[]) => Record<string, T[]>;
};
/**
 * Groups array items by a key function or object property.
 * @param arr - Items to group.
 * @param grouper - Property name or function that returns each item's group key.
 * @returns An object whose keys are group names and values are grouped items.
 *
 * @example
 * groupBy('status', [{ status: 'open' }, { status: 'closed' }, { status: 'open' }])
 */
declare const groupBy: GroupBy;
export default groupBy;
//# sourceMappingURL=groupBy.d.ts.map