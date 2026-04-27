type Get = {
    <T, K extends keyof T>(property: K, object: T): T[K];
    <K extends PropertyKey>(property: K): <T extends Record<K, any>>(object: T) => T[K];
};
declare const get: Get;
export default get;
//# sourceMappingURL=get.d.ts.map