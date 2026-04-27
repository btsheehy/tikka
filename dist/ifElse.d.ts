type IfElse = {
    <TR, FR>(onFalse: () => FR, onTrue: () => TR, test: () => boolean): TR | FR;
    <TR, FR>(onFalse: () => FR, onTrue: () => TR): (test: () => boolean) => TR | FR;
    <TR, FR>(onFalse: () => FR): (onTrue: () => TR, test: () => boolean) => TR | FR;
    <TR, FR>(onFalse: () => FR): (onTrue: () => TR) => (test: () => boolean) => TR | FR;
};
declare const ifElseCurried: IfElse;
export default ifElseCurried;
//# sourceMappingURL=ifElse.d.ts.map