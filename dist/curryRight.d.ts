declare function curryRight<T1, T2, R>(fn: (a: T1, b: T2) => R, arity?: number): (b: T2, a: T1) => R;
declare function curryRight<T1, T2, T3, R>(fn: (a: T1, b: T2, c: T3) => R, arity?: number): (c: T3, b: T2, a: T1) => R;
export default curryRight;
//# sourceMappingURL=curryRight.d.ts.map