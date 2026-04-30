type HighestBy = {
    <T>(fn: (value: T) => number, arr: T[]): T;
    <T>(fn: (value: T) => number): (arr: T[]) => T;
};
/**
 * Returns the element with the highest derived numeric score.
 * @param arr - Source array.
 * @param fn - Selector that computes each element's score.
 * @returns The element whose score is greatest.
 *
 * @example
 * highestBy((user) => user.score, [{ name: 'Ari', score: 12 }, { name: 'Bea', score: 21 }])
 * // { name: 'Bea', score: 21 }
 */
declare const highestByCurried: HighestBy;
export default highestByCurried;
//# sourceMappingURL=highestBy.d.ts.map