type CondPair<T, P> = [(args: P) => boolean, T];
type CondArgs<T, P> = [...CondPair<T, P>[], T];
type Cond = {
    <T, P>(args: CondArgs<T, P>, predicateArg: P): T;
    <T, P>(args: CondArgs<T, P>): (predicateArg: P) => T;
};
declare const condCurried: Cond;
export default condCurried;
//# sourceMappingURL=cond.d.ts.map