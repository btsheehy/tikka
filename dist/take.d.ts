type Take = {
    <T>(num: number, arr: T[]): T[];
    (num: number): <T>(arr: T[]) => T[];
};
/**
 * Takes the first `num` elements from an array.
 * @param arr - Source array.
 * @param num - Number of elements to keep from the start.
 * @returns A new array containing up to `num` leading items.
 *
 * @example
 * take(3, [10, 20, 30, 40]) // [10, 20, 30]
 */
declare const takeCurried: Take;
export default takeCurried;
//# sourceMappingURL=take.d.ts.map