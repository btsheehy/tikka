type Concat = {
    <T>(left: T[], right: T[]): T[];
    <T>(left: T[]): (right: T[]) => T[];
    (left: string, right: string): string;
    (left: string): (right: string) => string;
};
declare const concat: Concat;
export default concat;
//# sourceMappingURL=concat.d.ts.map