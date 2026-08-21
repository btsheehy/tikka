/**
 * Returns everything except the first element/character.
 * @param value - Array or string to slice.
 * @returns Array/string without its first entry.
 *
 * @example
 * tail([1, 2, 3]) // [2, 3]
 */
declare function tail<T>(arr: T[]): T[];
declare function tail(str: string): string;
export default tail;
//# sourceMappingURL=tail.d.ts.map