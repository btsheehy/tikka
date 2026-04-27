type Debug = {
    <T>(msg: string, value: T): T;
    (msg: string): <T>(value: T) => T;
};
declare const debugCurried: Debug;
export default debugCurried;
//# sourceMappingURL=debug.d.ts.map