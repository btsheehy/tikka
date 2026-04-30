type UniqBy = {
    <T, U>(uniqCond: (x: T) => U, arr: T[]): T[];
    <T, U>(uniqCond: (x: T) => U): (arr: T[]) => T[];
};
/**
 * Removes duplicates based on a derived key function.
 * @param arr - Source array.
 * @param uniqCond - Function that computes each item's uniqueness key.
 * @returns A new array containing the first item seen for each key.
 *
 * @example
 * uniqBy((user) => user.id, [{ id: 1 }, { id: 1 }, { id: 2 }])
 */
declare const uniqByCurried: UniqBy;
export default uniqByCurried;
//# sourceMappingURL=uniqBy.d.ts.map