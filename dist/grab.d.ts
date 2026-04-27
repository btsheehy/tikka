type Grab = {
    <T, K extends keyof T>(props: readonly K[], data: T): Partial<Pick<T, K>>;
    <T, K extends keyof T>(props: readonly K[], data: T[]): Array<Partial<Pick<T, K>>>;
    <K extends PropertyKey>(props: readonly K[]): {
        <T extends Record<K, any>>(data: T): Partial<Pick<T, K>>;
        <T extends Record<K, any>>(data: T[]): Array<Partial<Pick<T, K>>>;
    };
};
declare const grab: Grab;
export default grab;
//# sourceMappingURL=grab.d.ts.map