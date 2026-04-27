import curry from './curry';
import curryRight from './curryRight';
import deepClone from './deepClone';
import last from './last';
import pipe from './pipe';
import slice from './slice';
import tail from './tail';
declare const tikka: {
    always: <T>(arg: T) => () => T;
    and: {
        (a: any, b: any): boolean;
        (a: any): (b: any) => boolean;
    };
    any: {
        <T>(test: (t: T) => boolean, arr: Array<T>): boolean;
        <T>(test: (t: T) => boolean): (arr: Array<T>) => boolean;
    };
    compact: <T>(arr: Array<T | null | undefined>) => T[];
    coalesce: {
        <T>(fallback: T, value: T | null | undefined): T;
        <T>(fallback: T): (value: T | null | undefined) => T;
    };
    concat: {
        <T>(left: T[], right: T[]): T[];
        <T>(left: T[]): (right: T[]) => T[];
        (left: string, right: string): string;
        (left: string): (right: string) => string;
    };
    cond: {
        <T, P>(args: [...[(args: P) => boolean, T][], T], predicateArg: P): T;
        <T, P>(args: [...[(args: P) => boolean, T][], T]): (predicateArg: P) => T;
    };
    contains: {
        <T>(value: T, searchTarget: import("./contains").IncludesTarget<T>): boolean;
        <T>(value: T): (searchTarget: import("./contains").IncludesTarget<T>) => boolean;
    };
    countBy: {
        <T>(iteratee: (value: T) => string, arr: T[]): Record<string, number>;
        <T>(iteratee: (value: T) => string): (arr: T[]) => Record<string, number>;
    };
    countWhere: {
        <T>(test: (x: T) => boolean, arr: Array<T>): number;
        <T>(test: (x: T) => boolean): (arr: Array<T>) => number;
    };
    curry: typeof curry;
    curryRight: typeof curryRight;
    debug: {
        <T>(msg: string, value: T): T;
        (msg: string): <T>(value: T) => T;
    };
    deepClone: typeof deepClone;
    sort: {
        <T, U>(iteratee: (value: T) => U, arr: T[]): T[];
        <T, U>(iteratee: (value: T) => U): (arr: T[]) => T[];
    };
    deepForEach: {
        <T>(func: (value: T) => void, data: Array<T>): void;
        <T extends object>(func: (value: any) => void, data: T): void;
        <T>(func: (value: T) => void): (data: Array<T>) => void;
        <T extends object>(func: (value: any) => void): (data: T) => void;
    };
    deepMap: {
        <T, R>(func: (x: T) => R, data: Array<T>): Array<R>;
        <T extends object, R>(func: (x: any) => R, data: T): object;
        <T, R>(func: (x: T) => R): (data: Array<T>) => Array<R>;
        <T extends object, R>(func: (x: any) => R): (data: T) => object;
    };
    every: {
        <T>(test: (x: T) => boolean, arr: Array<T>): boolean;
        <T>(test: (x: T) => boolean): (arr: Array<T>) => boolean;
    };
    filter: {
        <T>(filterFunc: (x: T) => boolean, arr: Array<T>): T[];
        <T>(filterFunc: (x: T) => boolean): (arr: Array<T>) => T[];
    };
    find: {
        <T>(findFunc: (x: T) => boolean, arr: Array<T>): T | undefined;
        <T>(findFunc: (x: T) => boolean): (arr: Array<T>) => T | undefined;
    };
    findIndex: {
        <T>(findFunc: (x: T) => boolean, arr: Array<T>): number;
        <T>(findFunc: (x: T) => boolean): (arr: Array<T>) => number;
    };
    first: <T>(arr: [T]) => T;
    flatten: <T>(arr: T[]) => any[];
    forEach: {
        <T>(func: (x: T) => void, arr: T[]): T[];
        <T>(func: (x: T) => void): (arr: T[]) => T[];
    };
    forEachValues: {
        (fn: (x: any) => any, obj: {}): {};
        (fn: (x: any) => any): (obj: {}) => {};
    };
    get: {
        <T, K extends keyof T>(property: K, object: T): T[K];
        <K extends PropertyKey>(property: K): <T extends Record<K, any>>(object: T) => T[K];
    };
    getOr: {
        <T, K extends keyof T, R>(defaultValue: R, prop: K, obj: T): T[K];
        <R>(defaultValue: R, prop: PropertyKey, obj: {}): R;
        <T, K extends keyof T, R>(defaultValue: R, prop: K): (obj: T) => T[K];
        <R>(defaultValue: R, prop: PropertyKey): (obj: {}) => R;
    };
    grab: {
        <T, K extends keyof T>(props: readonly K[], data: T): Partial<Pick<T, K>>;
        <T, K extends keyof T>(props: readonly K[], data: T[]): Array<Partial<Pick<T, K>>>;
        <K extends PropertyKey>(props: readonly K[]): {
            <T extends Record<K, any>>(data: T): Partial<Pick<T, K>>;
            <T extends Record<K, any>>(data: T[]): Array<Partial<Pick<T, K>>>;
        };
    };
    groupBy: {
        <T>(grouper: (x: T) => string | number, arr: T[]): Record<string, T[]>;
        <T, K extends keyof T>(grouper: K, arr: T[]): Record<string, T[]>;
        <T>(grouper: (x: T) => string | number): (arr: T[]) => Record<string, T[]>;
        <K extends string | number>(grouper: K): <T extends Record<K, string | number>>(arr: T[]) => Record<string, T[]>;
    };
    gt: {
        (a: number, b: number): boolean;
        (a: number): (b: number) => boolean;
    };
    gte: {
        (a: number, b: number): boolean;
        (a: number): (b: number) => boolean;
    };
    has: {
        (prop: string, obj: {}): boolean;
        (prop: string): (obj: {}) => boolean;
    };
    head: <T>(arr: [T]) => T;
    identity: <T>(a: T) => T;
    ifElse: {
        <TR, FR>(onFalse: () => FR, onTrue: () => TR, test: () => boolean): TR | FR;
        <TR, FR>(onFalse: () => FR, onTrue: () => TR): (test: () => boolean) => TR | FR;
        <TR, FR>(onFalse: () => FR): (onTrue: () => TR, test: () => boolean) => TR | FR;
        <TR, FR>(onFalse: () => FR): (onTrue: () => TR) => (test: () => boolean) => TR | FR;
    };
    includes: {
        <T>(value: T, searchTarget: import("./contains").IncludesTarget<T>): boolean;
        <T>(value: T): (searchTarget: import("./contains").IncludesTarget<T>) => boolean;
    };
    isEven: (num: number) => boolean;
    isOdd: (number: number) => boolean;
    last: typeof last;
    lt: {
        (a: number, b: number): boolean;
        (a: number): (b: number) => boolean;
    };
    lte: {
        (a: number, b: number): boolean;
        (a: number): (b: number) => boolean;
    };
    map: {
        <T, R>(fn: (x: T) => R, arr: T[]): R[];
        <T, R>(fn: (x: T) => R): (arr: T[]) => R[];
    };
    mapKeys: {
        <T extends object, K extends keyof T, R extends string>(fn: (x: K) => R, obj: T): Record<R, T[K]>;
        <T extends object, K extends keyof T, R extends string>(fn: (x: K) => R): (obj: T) => Record<R, T[K]>;
    };
    mapValues: {
        <T extends Record<string, any>, R>(fn: (x: T[keyof T]) => R, obj: T): Record<keyof T, R>;
        <T extends Record<string, any>, R>(fn: (x: T[keyof T]) => R): (obj: T) => Record<keyof T, R>;
    };
    minus: {
        (b: number, a: number): number;
        (b: number): (a: number) => number;
    };
    multiply: {
        (a: number, b: number): number;
        (a: number): (b: number) => number;
    };
    noop: () => void;
    or: {
        (a: any, b: any): boolean;
        (a: any): (b: any) => boolean;
    };
    pipe: typeof pipe;
    placeholder: any;
    pluck: {
        <T, K extends keyof T>(prop: K, collection: T[]): T[K][];
        <K extends PropertyKey>(prop: K): <T extends Record<K, any>>(collection: T[]) => T[K][];
    };
    plus: {
        (a: number, b: number): number;
        (a: number): (b: number) => number;
    };
    replace: {
        <T, U>(replacement: U, replacee: T, targetArray: T[]): (T | U)[];
        <T, U>(replacement: (item: T) => U, replacee: T, targetArray: T[]): (T | U)[];
        <T, U>(replacement: U, replacee: (arg0: T) => boolean, targetArray: T[]): (T | U)[];
        <T, U>(replacement: (item: T) => U, replacee: (arg0: T) => boolean, targetArray: T[]): (T | U)[];
        (replacement: string, substring: string, targetString: string): string;
        (replacement: string, regex: RegExp, targetString: string): string;
    };
    reverse: <T>(v: T[] | string) => string | any[];
    select: {
        <T, K extends keyof T>(props: readonly K[], data: T): Partial<Pick<T, K>>;
        <T, K extends keyof T>(props: readonly K[], data: T[]): Array<Partial<Pick<T, K>>>;
        <K extends PropertyKey>(props: readonly K[]): {
            <T extends Record<K, any>>(data: T): Partial<Pick<T, K>>;
            <T extends Record<K, any>>(data: T[]): Array<Partial<Pick<T, K>>>;
        };
    };
    self: <T>(a: T) => T;
    slice: typeof slice;
    sortBy: {
        <T extends Record<string, any>, K extends keyof T>(fieldOrIteratee: K | ((value: T) => any), direction: import("./sortBy").SortDirection, arr: T[]): T[];
        <T extends Record<string, any>, K extends keyof T>(fieldOrIteratee: K | ((value: T) => any), direction: import("./sortBy").SortDirection): (arr: T[]) => T[];
    };
    split: {
        (separator: string | RegExp, str: string): string[];
        (separator: string | RegExp): (str: string) => string[];
    };
    startsWith: {
        (prefix: string, str: string): boolean;
        (prefix: string): (str: string) => boolean;
    };
    endsWith: {
        (suffix: string, str: string): boolean;
        (suffix: string): (str: string) => boolean;
    };
    tail: typeof tail;
    take: {
        <T>(num: number, arr: T[]): T[];
        (num: number): <T>(arr: T[]) => T[];
    };
    test: {
        (regex: RegExp, str: string): boolean;
        (regex: RegExp): (str: string) => boolean;
    };
    toLower: (str: string) => string;
    toUpper: (str: string) => string;
    trim: (str: string) => string;
    type: (val: any) => string;
    uniq: <T>(arr: T[]) => T[];
    uniqBy: {
        <T, U>(uniqCond: (x: T) => U, arr: T[]): T[];
        <T, U>(uniqCond: (x: T) => U): (arr: T[]) => T[];
    };
    both: {
        (a: any, b: any): boolean;
        (a: any): (b: any) => boolean;
    };
    conjunction: {
        (a: any, b: any): boolean;
        (a: any): (b: any) => boolean;
    };
    some: {
        <T>(test: (t: T) => boolean, arr: Array<T>): boolean;
        <T>(test: (t: T) => boolean): (arr: Array<T>) => boolean;
    };
    anyPass: {
        <T>(test: (t: T) => boolean, arr: Array<T>): boolean;
        <T>(test: (t: T) => boolean): (arr: Array<T>) => boolean;
    };
    compactNil: <T>(arr: Array<T | null | undefined>) => T[];
    removeNil: <T>(arr: Array<T | null | undefined>) => T[];
    filterNil: <T>(arr: Array<T | null | undefined>) => T[];
    nonNil: <T>(arr: Array<T | null | undefined>) => T[];
    append: {
        <T>(left: T[], right: T[]): T[];
        <T>(left: T[]): (right: T[]) => T[];
        (left: string, right: string): string;
        (left: string): (right: string) => string;
    };
    conj: {
        <T>(left: T[], right: T[]): T[];
        <T>(left: T[]): (right: T[]) => T[];
        (left: string, right: string): string;
        (left: string): (right: string) => string;
    };
    condition: {
        <T, P>(args: [...[(args: P) => boolean, T][], T], predicateArg: P): T;
        <T, P>(args: [...[(args: P) => boolean, T][], T]): (predicateArg: P) => T;
    };
    includesValue: {
        <T>(value: T, searchTarget: import("./contains").IncludesTarget<T>): boolean;
        <T>(value: T): (searchTarget: import("./contains").IncludesTarget<T>) => boolean;
    };
    containsValue: {
        <T>(value: T, searchTarget: import("./contains").IncludesTarget<T>): boolean;
        <T>(value: T): (searchTarget: import("./contains").IncludesTarget<T>) => boolean;
    };
    member: {
        <T>(value: T, searchTarget: import("./contains").IncludesTarget<T>): boolean;
        <T>(value: T): (searchTarget: import("./contains").IncludesTarget<T>) => boolean;
    };
    memberOf: {
        <T>(value: T, searchTarget: import("./contains").IncludesTarget<T>): boolean;
        <T>(value: T): (searchTarget: import("./contains").IncludesTarget<T>) => boolean;
    };
    inList: {
        <T>(value: T, searchTarget: import("./contains").IncludesTarget<T>): boolean;
        <T>(value: T): (searchTarget: import("./contains").IncludesTarget<T>) => boolean;
    };
    countIf: {
        <T>(test: (x: T) => boolean, arr: Array<T>): number;
        <T>(test: (x: T) => boolean): (arr: Array<T>) => number;
    };
    tallyWhere: {
        <T>(test: (x: T) => boolean, arr: Array<T>): number;
        <T>(test: (x: T) => boolean): (arr: Array<T>) => number;
    };
    autoCurry: typeof curry;
    curryR: typeof curryRight;
    rightCurry: typeof curryRight;
    reverseCurry: typeof curryRight;
    trace: {
        <T>(msg: string, value: T): T;
        (msg: string): <T>(value: T) => T;
    };
    inspect: {
        <T>(msg: string, value: T): T;
        (msg: string): <T>(value: T) => T;
    };
    peek: {
        <T>(msg: string, value: T): T;
        (msg: string): <T>(value: T) => T;
    };
    cloneDeep: typeof deepClone;
    copyDeep: typeof deepClone;
    deepCopy: typeof deepClone;
    sortWith: {
        <T, U>(iteratee: (value: T) => U, arr: T[]): T[];
        <T, U>(iteratee: (value: T) => U): (arr: T[]) => T[];
    };
    sortOn: {
        <T, U>(iteratee: (value: T) => U, arr: T[]): T[];
        <T, U>(iteratee: (value: T) => U): (arr: T[]) => T[];
    };
    orderWith: {
        <T, U>(iteratee: (value: T) => U, arr: T[]): T[];
        <T, U>(iteratee: (value: T) => U): (arr: T[]) => T[];
    };
    order: {
        <T, U>(iteratee: (value: T) => U, arr: T[]): T[];
        <T, U>(iteratee: (value: T) => U): (arr: T[]) => T[];
    };
    orderOn: {
        <T, U>(iteratee: (value: T) => U, arr: T[]): T[];
        <T, U>(iteratee: (value: T) => U): (arr: T[]) => T[];
    };
    forEachDeep: {
        <T>(func: (value: T) => void, data: Array<T>): void;
        <T extends object>(func: (value: any) => void, data: T): void;
        <T>(func: (value: T) => void): (data: Array<T>) => void;
        <T extends object>(func: (value: any) => void): (data: T) => void;
    };
    eachDeep: {
        <T>(func: (value: T) => void, data: Array<T>): void;
        <T extends object>(func: (value: any) => void, data: T): void;
        <T>(func: (value: T) => void): (data: Array<T>) => void;
        <T extends object>(func: (value: any) => void): (data: T) => void;
    };
    walkDeep: {
        <T>(func: (value: T) => void, data: Array<T>): void;
        <T extends object>(func: (value: any) => void, data: T): void;
        <T>(func: (value: T) => void): (data: Array<T>) => void;
        <T extends object>(func: (value: any) => void): (data: T) => void;
    };
    mapDeep: {
        <T, R>(func: (x: T) => R, data: Array<T>): Array<R>;
        <T extends object, R>(func: (x: any) => R, data: T): object;
        <T, R>(func: (x: T) => R): (data: Array<T>) => Array<R>;
        <T extends object, R>(func: (x: any) => R): (data: T) => object;
    };
    deepTransform: {
        <T, R>(func: (x: T) => R, data: Array<T>): Array<R>;
        <T extends object, R>(func: (x: any) => R, data: T): object;
        <T, R>(func: (x: T) => R): (data: Array<T>) => Array<R>;
        <T extends object, R>(func: (x: any) => R): (data: T) => object;
    };
    all: {
        <T>(test: (x: T) => boolean, arr: Array<T>): boolean;
        <T>(test: (x: T) => boolean): (arr: Array<T>) => boolean;
    };
    allPass: {
        <T>(test: (x: T) => boolean, arr: Array<T>): boolean;
        <T>(test: (x: T) => boolean): (arr: Array<T>) => boolean;
    };
    eachPasses: {
        <T>(test: (x: T) => boolean, arr: Array<T>): boolean;
        <T>(test: (x: T) => boolean): (arr: Array<T>) => boolean;
    };
    where: {
        <T>(filterFunc: (x: T) => boolean, arr: Array<T>): T[];
        <T>(filterFunc: (x: T) => boolean): (arr: Array<T>) => T[];
    };
    selectWhere: {
        <T>(filterFunc: (x: T) => boolean, arr: Array<T>): T[];
        <T>(filterFunc: (x: T) => boolean): (arr: Array<T>) => T[];
    };
    keep: {
        <T>(filterFunc: (x: T) => boolean, arr: Array<T>): T[];
        <T>(filterFunc: (x: T) => boolean): (arr: Array<T>) => T[];
    };
    keepIf: {
        <T>(filterFunc: (x: T) => boolean, arr: Array<T>): T[];
        <T>(filterFunc: (x: T) => boolean): (arr: Array<T>) => T[];
    };
    keepWhere: {
        <T>(filterFunc: (x: T) => boolean, arr: Array<T>): T[];
        <T>(filterFunc: (x: T) => boolean): (arr: Array<T>) => T[];
    };
    selectIf: {
        <T>(filterFunc: (x: T) => boolean, arr: Array<T>): T[];
        <T>(filterFunc: (x: T) => boolean): (arr: Array<T>) => T[];
    };
    findFirst: {
        <T>(findFunc: (x: T) => boolean, arr: Array<T>): T | undefined;
        <T>(findFunc: (x: T) => boolean): (arr: Array<T>) => T | undefined;
    };
    firstWhere: {
        <T>(findFunc: (x: T) => boolean, arr: Array<T>): T | undefined;
        <T>(findFunc: (x: T) => boolean): (arr: Array<T>) => T | undefined;
    };
    indexWhere: {
        <T>(findFunc: (x: T) => boolean, arr: Array<T>): number;
        <T>(findFunc: (x: T) => boolean): (arr: Array<T>) => number;
    };
    findPosition: {
        <T>(findFunc: (x: T) => boolean, arr: Array<T>): number;
        <T>(findFunc: (x: T) => boolean): (arr: Array<T>) => number;
    };
    positionWhere: {
        <T>(findFunc: (x: T) => boolean, arr: Array<T>): number;
        <T>(findFunc: (x: T) => boolean): (arr: Array<T>) => number;
    };
    headValue: <T>(arr: [T]) => T;
    firstItem: <T>(arr: [T]) => T;
    firstValue: <T>(arr: [T]) => T;
    flattenDeep: <T>(arr: T[]) => any[];
    deepFlatten: <T>(arr: T[]) => any[];
    concatAll: <T>(arr: T[]) => any[];
    smoosh: <T>(arr: T[]) => any[];
    flat: <T>(arr: T[]) => any[];
    each: {
        <T>(func: (x: T) => void, arr: T[]): T[];
        <T>(func: (x: T) => void): (arr: T[]) => T[];
    };
    forEachItem: {
        <T>(func: (x: T) => void, arr: T[]): T[];
        <T>(func: (x: T) => void): (arr: T[]) => T[];
    };
    walk: {
        <T>(func: (x: T) => void, arr: T[]): T[];
        <T>(func: (x: T) => void): (arr: T[]) => T[];
    };
    eachValue: {
        (fn: (x: any) => any, obj: {}): {};
        (fn: (x: any) => any): (obj: {}) => {};
    };
    forEachValue: {
        (fn: (x: any) => any, obj: {}): {};
        (fn: (x: any) => any): (obj: {}) => {};
    };
    walkValues: {
        (fn: (x: any) => any, obj: {}): {};
        (fn: (x: any) => any): (obj: {}) => {};
    };
    prop: {
        <T, K extends keyof T>(property: K, object: T): T[K];
        <K extends PropertyKey>(property: K): <T extends Record<K, any>>(object: T) => T[K];
    };
    property: {
        <T, K extends keyof T>(property: K, object: T): T[K];
        <K extends PropertyKey>(property: K): <T extends Record<K, any>>(object: T) => T[K];
    };
    lookup: {
        <T, K extends keyof T>(property: K, object: T): T[K];
        <K extends PropertyKey>(property: K): <T extends Record<K, any>>(object: T) => T[K];
    };
    propOr: {
        <T, K extends keyof T, R>(defaultValue: R, prop: K, obj: T): T[K];
        <R>(defaultValue: R, prop: PropertyKey, obj: {}): R;
        <T, K extends keyof T, R>(defaultValue: R, prop: K): (obj: T) => T[K];
        <R>(defaultValue: R, prop: PropertyKey): (obj: {}) => R;
    };
    getDefault: {
        <T, K extends keyof T, R>(defaultValue: R, prop: K, obj: T): T[K];
        <R>(defaultValue: R, prop: PropertyKey, obj: {}): R;
        <T, K extends keyof T, R>(defaultValue: R, prop: K): (obj: T) => T[K];
        <R>(defaultValue: R, prop: PropertyKey): (obj: {}) => R;
    };
    getWithDefault: {
        <T, K extends keyof T, R>(defaultValue: R, prop: K, obj: T): T[K];
        <R>(defaultValue: R, prop: PropertyKey, obj: {}): R;
        <T, K extends keyof T, R>(defaultValue: R, prop: K): (obj: T) => T[K];
        <R>(defaultValue: R, prop: PropertyKey): (obj: {}) => R;
    };
    pick: {
        <T, K extends keyof T>(props: readonly K[], data: T): Partial<Pick<T, K>>;
        <T, K extends keyof T>(props: readonly K[], data: T[]): Array<Partial<Pick<T, K>>>;
        <K extends PropertyKey>(props: readonly K[]): {
            <T extends Record<K, any>>(data: T): Partial<Pick<T, K>>;
            <T extends Record<K, any>>(data: T[]): Array<Partial<Pick<T, K>>>;
        };
    };
    pickKeys: {
        <T, K extends keyof T>(props: readonly K[], data: T): Partial<Pick<T, K>>;
        <T, K extends keyof T>(props: readonly K[], data: T[]): Array<Partial<Pick<T, K>>>;
        <K extends PropertyKey>(props: readonly K[]): {
            <T extends Record<K, any>>(data: T): Partial<Pick<T, K>>;
            <T extends Record<K, any>>(data: T[]): Array<Partial<Pick<T, K>>>;
        };
    };
    selectKeys: {
        <T, K extends keyof T>(props: readonly K[], data: T): Partial<Pick<T, K>>;
        <T, K extends keyof T>(props: readonly K[], data: T[]): Array<Partial<Pick<T, K>>>;
        <K extends PropertyKey>(props: readonly K[]): {
            <T extends Record<K, any>>(data: T): Partial<Pick<T, K>>;
            <T extends Record<K, any>>(data: T[]): Array<Partial<Pick<T, K>>>;
        };
    };
    classify: {
        <T>(grouper: (x: T) => string | number, arr: T[]): Record<string, T[]>;
        <T, K extends keyof T>(grouper: K, arr: T[]): Record<string, T[]>;
        <T>(grouper: (x: T) => string | number): (arr: T[]) => Record<string, T[]>;
        <K extends string | number>(grouper: K): <T extends Record<K, string | number>>(arr: T[]) => Record<string, T[]>;
    };
    bucketBy: {
        <T>(grouper: (x: T) => string | number, arr: T[]): Record<string, T[]>;
        <T, K extends keyof T>(grouper: K, arr: T[]): Record<string, T[]>;
        <T>(grouper: (x: T) => string | number): (arr: T[]) => Record<string, T[]>;
        <K extends string | number>(grouper: K): <T extends Record<K, string | number>>(arr: T[]) => Record<string, T[]>;
    };
    partitionByKey: {
        <T>(grouper: (x: T) => string | number, arr: T[]): Record<string, T[]>;
        <T, K extends keyof T>(grouper: K, arr: T[]): Record<string, T[]>;
        <T>(grouper: (x: T) => string | number): (arr: T[]) => Record<string, T[]>;
        <K extends string | number>(grouper: K): <T extends Record<K, string | number>>(arr: T[]) => Record<string, T[]>;
    };
    greaterThan: {
        (a: number, b: number): boolean;
        (a: number): (b: number) => boolean;
    };
    isGreaterThan: {
        (a: number, b: number): boolean;
        (a: number): (b: number) => boolean;
    };
    greaterThanOrEqual: {
        (a: number, b: number): boolean;
        (a: number): (b: number) => boolean;
    };
    isAtLeast: {
        (a: number, b: number): boolean;
        (a: number): (b: number) => boolean;
    };
    hasKey: {
        (prop: string, obj: {}): boolean;
        (prop: string): (obj: {}) => boolean;
    };
    hasProp: {
        (prop: string, obj: {}): boolean;
        (prop: string): (obj: {}) => boolean;
    };
    hasOwnKey: {
        (prop: string, obj: {}): boolean;
        (prop: string): (obj: {}) => boolean;
    };
    id: <T>(a: T) => T;
    selfRef: <T>(a: T) => T;
    noopValue: <T>(a: T) => T;
    identityValue: <T>(a: T) => T;
    same: <T>(a: T) => T;
    idValue: <T>(a: T) => T;
    whenElse: {
        <TR, FR>(onFalse: () => FR, onTrue: () => TR, test: () => boolean): TR | FR;
        <TR, FR>(onFalse: () => FR, onTrue: () => TR): (test: () => boolean) => TR | FR;
        <TR, FR>(onFalse: () => FR): (onTrue: () => TR, test: () => boolean) => TR | FR;
        <TR, FR>(onFalse: () => FR): (onTrue: () => TR) => (test: () => boolean) => TR | FR;
    };
    branch: {
        <TR, FR>(onFalse: () => FR, onTrue: () => TR, test: () => boolean): TR | FR;
        <TR, FR>(onFalse: () => FR, onTrue: () => TR): (test: () => boolean) => TR | FR;
        <TR, FR>(onFalse: () => FR): (onTrue: () => TR, test: () => boolean) => TR | FR;
        <TR, FR>(onFalse: () => FR): (onTrue: () => TR) => (test: () => boolean) => TR | FR;
    };
    even: (num: number) => boolean;
    isDivisibleBy2: (num: number) => boolean;
    odd: (number: number) => boolean;
    isNotDivisibleBy2: (number: number) => boolean;
    lastItem: typeof last;
    end: typeof last;
    lastValue: typeof last;
    endValue: typeof last;
    lessThan: {
        (a: number, b: number): boolean;
        (a: number): (b: number) => boolean;
    };
    isLessThan: {
        (a: number, b: number): boolean;
        (a: number): (b: number) => boolean;
    };
    lessThanOrEqual: {
        (a: number, b: number): boolean;
        (a: number): (b: number) => boolean;
    };
    isAtMost: {
        (a: number, b: number): boolean;
        (a: number): (b: number) => boolean;
    };
    transformKeys: {
        <T extends object, K extends keyof T, R extends string>(fn: (x: K) => R, obj: T): Record<R, T[K]>;
        <T extends object, K extends keyof T, R extends string>(fn: (x: K) => R): (obj: T) => Record<R, T[K]>;
    };
    renameKeys: {
        <T extends object, K extends keyof T, R extends string>(fn: (x: K) => R, obj: T): Record<R, T[K]>;
        <T extends object, K extends keyof T, R extends string>(fn: (x: K) => R): (obj: T) => Record<R, T[K]>;
    };
    mapObjectKeys: {
        <T extends object, K extends keyof T, R extends string>(fn: (x: K) => R, obj: T): Record<R, T[K]>;
        <T extends object, K extends keyof T, R extends string>(fn: (x: K) => R): (obj: T) => Record<R, T[K]>;
    };
    transformValues: {
        <T extends Record<string, any>, R>(fn: (x: T[keyof T]) => R, obj: T): Record<keyof T, R>;
        <T extends Record<string, any>, R>(fn: (x: T[keyof T]) => R): (obj: T) => Record<keyof T, R>;
    };
    mapObjectValues: {
        <T extends Record<string, any>, R>(fn: (x: T[keyof T]) => R, obj: T): Record<keyof T, R>;
        <T extends Record<string, any>, R>(fn: (x: T[keyof T]) => R): (obj: T) => Record<keyof T, R>;
    };
    subtract: {
        (b: number, a: number): number;
        (b: number): (a: number) => number;
    };
    sub: {
        (b: number, a: number): number;
        (b: number): (a: number) => number;
    };
    difference: {
        (b: number, a: number): number;
        (b: number): (a: number) => number;
    };
    doNothing: () => void;
    noopFn: () => void;
    pass: () => void;
    either: {
        (a: any, b: any): boolean;
        (a: any): (b: any) => boolean;
    };
    disjunction: {
        (a: any, b: any): boolean;
        (a: any): (b: any) => boolean;
    };
    flow: typeof pipe;
    composeLeft: typeof pipe;
    chain: typeof pipe;
    __: any;
    hole: any;
    argPlaceholder: any;
    mapProp: {
        <T, K extends keyof T>(prop: K, collection: T[]): T[K][];
        <K extends PropertyKey>(prop: K): <T extends Record<K, any>>(collection: T[]) => T[K][];
    };
    projectProp: {
        <T, K extends keyof T>(prop: K, collection: T[]): T[K][];
        <K extends PropertyKey>(prop: K): <T extends Record<K, any>>(collection: T[]) => T[K][];
    };
    extractProp: {
        <T, K extends keyof T>(prop: K, collection: T[]): T[K][];
        <K extends PropertyKey>(prop: K): <T extends Record<K, any>>(collection: T[]) => T[K][];
    };
    propertyValues: {
        <T, K extends keyof T>(prop: K, collection: T[]): T[K][];
        <K extends PropertyKey>(prop: K): <T extends Record<K, any>>(collection: T[]) => T[K][];
    };
    add: {
        (a: number, b: number): number;
        (a: number): (b: number) => number;
    };
    sum2: {
        (a: number, b: number): number;
        (a: number): (b: number) => number;
    };
    add2: {
        (a: number, b: number): number;
        (a: number): (b: number) => number;
    };
    sum: {
        (a: number, b: number): number;
        (a: number): (b: number) => number;
    };
    orderBy: {
        <T extends Record<string, any>, K extends keyof T>(fieldOrIteratee: K | ((value: T) => any), direction: import("./sortBy").SortDirection, arr: T[]): T[];
        <T extends Record<string, any>, K extends keyof T>(fieldOrIteratee: K | ((value: T) => any), direction: import("./sortBy").SortDirection): (arr: T[]) => T[];
    };
    sortByKey: {
        <T extends Record<string, any>, K extends keyof T>(fieldOrIteratee: K | ((value: T) => any), direction: import("./sortBy").SortDirection, arr: T[]): T[];
        <T extends Record<string, any>, K extends keyof T>(fieldOrIteratee: K | ((value: T) => any), direction: import("./sortBy").SortDirection): (arr: T[]) => T[];
    };
    rest: typeof tail;
    dropFirst: typeof tail;
    takeLeft: {
        <T>(num: number, arr: T[]): T[];
        (num: number): <T>(arr: T[]) => T[];
    };
    firstN: {
        <T>(num: number, arr: T[]): T[];
        (num: number): <T>(arr: T[]) => T[];
    };
    headN: {
        <T>(num: number, arr: T[]): T[];
        (num: number): <T>(arr: T[]) => T[];
    };
    takeN: {
        <T>(num: number, arr: T[]): T[];
        (num: number): <T>(arr: T[]) => T[];
    };
    matches: {
        (regex: RegExp, str: string): boolean;
        (regex: RegExp): (str: string) => boolean;
    };
    regexTest: {
        (regex: RegExp, str: string): boolean;
        (regex: RegExp): (str: string) => boolean;
    };
    isMatch: {
        (regex: RegExp, str: string): boolean;
        (regex: RegExp): (str: string) => boolean;
    };
    testRegex: {
        (regex: RegExp, str: string): boolean;
        (regex: RegExp): (str: string) => boolean;
    };
    lower: (str: string) => string;
    lowerCase: (str: string) => string;
    downcase: (str: string) => string;
    upper: (str: string) => string;
    upperCase: (str: string) => string;
    upcase: (str: string) => string;
    strip: (str: string) => string;
    trimWhitespace: (str: string) => string;
    typeOf: (val: any) => string;
    kindOf: (val: any) => string;
    tagOf: (val: any) => string;
    distinct: <T>(arr: T[]) => T[];
    unique: <T>(arr: T[]) => T[];
    dedupe: <T>(arr: T[]) => T[];
    nub: <T>(arr: T[]) => T[];
    distinctBy: {
        <T, U>(uniqCond: (x: T) => U, arr: T[]): T[];
        <T, U>(uniqCond: (x: T) => U): (arr: T[]) => T[];
    };
    uniqueBy: {
        <T, U>(uniqCond: (x: T) => U, arr: T[]): T[];
        <T, U>(uniqCond: (x: T) => U): (arr: T[]) => T[];
    };
    dedupeBy: {
        <T, U>(uniqCond: (x: T) => U, arr: T[]): T[];
        <T, U>(uniqCond: (x: T) => U): (arr: T[]) => T[];
    };
    nubBy: {
        <T, U>(uniqCond: (x: T) => U, arr: T[]): T[];
        <T, U>(uniqCond: (x: T) => U): (arr: T[]) => T[];
    };
    replaceAll: {
        <T, U>(replacement: U, replacee: T, targetArray: T[]): (T | U)[];
        <T, U>(replacement: (item: T) => U, replacee: T, targetArray: T[]): (T | U)[];
        <T, U>(replacement: U, replacee: (arg0: T) => boolean, targetArray: T[]): (T | U)[];
        <T, U>(replacement: (item: T) => U, replacee: (arg0: T) => boolean, targetArray: T[]): (T | U)[];
        (replacement: string, substring: string, targetString: string): string;
        (replacement: string, regex: RegExp, targetString: string): string;
    };
};
export default tikka;
//# sourceMappingURL=tikka.d.ts.map