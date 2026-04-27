type Sort = {
    <T, U>(iteratee: (value: T) => U, arr: T[]): T[];
    <T, U>(iteratee: (value: T) => U): (arr: T[]) => T[];
};
declare const sortCurried: Sort;
export default sortCurried;
//# sourceMappingURL=sort.d.ts.map