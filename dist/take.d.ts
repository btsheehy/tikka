type Take = {
    <T>(num: number, arr: T[]): T[];
    (num: number): <T>(arr: T[]) => T[];
};
declare const takeCurried: Take;
export default takeCurried;
//# sourceMappingURL=take.d.ts.map