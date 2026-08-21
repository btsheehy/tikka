/**
 * Removes `null`, `undefined`, and `NaN` entries from an array.
 * @param arr - Array that may contain empty values.
 * @returns A new array containing only defined, non-`NaN` items.
 *
 * @example
 * compact([0, null, 2, undefined, Number.NaN, 4]) // [0, 2, 4]
 */
declare const compact: <T>(arr: Array<T | null | undefined>) => T[];
export default compact;
//# sourceMappingURL=compact.d.ts.map