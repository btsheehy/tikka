type Sort = {
    <T, U>(iteratee: (value: T) => U, arr: T[]): T[];
    <T, U>(iteratee: (value: T) => U): (arr: T[]) => T[];
};
/**
 * Sorts an array by a computed key without mutating the input.
 * @param arr - Array to sort.
 * @param iteratee - Function that computes the sortable value for each item.
 * @returns A new array sorted ascending by `iteratee(item)`.
 *
 * @example
 * sort((user) => user.age, users)
 */
declare const sortCurried: Sort;
export default sortCurried;
//# sourceMappingURL=sort.d.ts.map