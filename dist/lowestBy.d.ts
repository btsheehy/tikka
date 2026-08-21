type LowestBy = {
    <T>(fn: (value: T) => number, arr: T[]): T;
    <T>(fn: (value: T) => number): (arr: T[]) => T;
};
/**
 * Returns the element with the lowest derived numeric score.
 * @param arr - Source array.
 * @param fn - Selector that computes each element's score.
 * @returns The element whose score is smallest.
 *
 * @example
 * lowestBy((user) => user.score, [{ name: 'Ari', score: 12 }, { name: 'Bea', score: 21 }])
 * // { name: 'Ari', score: 12 }
 */
declare const lowestByCurried: LowestBy;
export default lowestByCurried;
//# sourceMappingURL=lowestBy.d.ts.map