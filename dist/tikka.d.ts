import curry from './curry';
import curryRight from './curryRight';
import deepClone from './deepClone';
import last from './last';
import pipe from './pipe';
import tail from './tail';
declare const tikka: {
    always: <T>(arg: T) => () => T;
    and: {
        (a: any, b: any, ...extra: unknown[]): boolean;
        (a: any): (b: any, ...extra: unknown[]) => boolean;
    };
    any: {
        (b: unknown, a: unknown, ...extra: unknown[]): boolean;
        (b: unknown): (a: unknown, ...extra: unknown[]) => boolean;
    };
    compact: <T>(arr: Array<T | null | undefined>) => T[];
    concat: {
        <T>(left: T[], right: T[]): T[];
        <T>(left: T[]): (right: T[]) => T[];
        (left: string, right: string): string;
        (left: string): (right: string) => string;
    };
    cond: {
        (a: unknown, b: unknown, ...extra: unknown[]): unknown;
        (a: unknown): (b: unknown, ...extra: unknown[]) => unknown;
    };
    contains: {
        (b: unknown, a: import("./contains").IncludesTarget, ...extra: unknown[]): boolean;
        (b: unknown): (a: import("./contains").IncludesTarget, ...extra: unknown[]) => boolean;
    };
    countBy: {
        (b: unknown, a: unknown, ...extra: unknown[]): Record<string, number>;
        (b: unknown): (a: unknown, ...extra: unknown[]) => Record<string, number>;
    };
    countWhere: {
        (b: unknown, a: unknown, ...extra: unknown[]): number;
        (b: unknown): (a: unknown, ...extra: unknown[]) => number;
    };
    curry: typeof curry;
    curryRight: typeof curryRight;
    debug: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown;
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown;
    };
    deepClone: typeof deepClone;
    sort: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    deepForEach: {
        (b: (value: unknown) => unknown, a: object, ...extra: unknown[]): void;
        (b: (value: unknown) => unknown): (a: object, ...extra: unknown[]) => void;
    };
    deepMap: {
        (b: (x: unknown) => unknown, a: object, ...extra: unknown[]): object;
        (b: (x: unknown) => unknown): (a: object, ...extra: unknown[]) => object;
    };
    every: {
        (b: unknown, a: unknown, ...extra: unknown[]): boolean;
        (b: unknown): (a: unknown, ...extra: unknown[]) => boolean;
    };
    filter: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    find: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown;
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown;
    };
    findIndex: {
        (b: unknown, a: unknown, ...extra: unknown[]): number;
        (b: unknown): (a: unknown, ...extra: unknown[]) => number;
    };
    first: <T>(arr: [T]) => T;
    flatten: <T>(arr: T[]) => any[];
    forEach: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    forEachValues: {
        (b: (x: any) => any, a: {}, ...extra: unknown[]): {};
        (b: (x: any) => any): (a: {}, ...extra: unknown[]) => {};
    };
    get: {
        <T, K extends keyof T>(property: K, object: T): T[K];
        <K extends PropertyKey>(property: K): <T extends Record<K, unknown>>(object: T) => T[K];
    };
    getOr: {
        (c: unknown, b: any, a: {}, ...extra: unknown[]): unknown;
        (c: unknown, b: any): (a: {}, ...extra: unknown[]) => unknown;
        (c: unknown): {
            (b: any, a: {}, ...extra: unknown[]): unknown;
            (b: any): (a: {}, ...extra: unknown[]) => unknown;
        };
    };
    grab: {
        <T, K extends keyof T>(props: readonly K[], data: T): Partial<Pick<T, K>>;
        <T, K extends keyof T>(props: readonly K[], data: T[]): Array<Partial<Pick<T, K>>>;
        <K extends PropertyKey>(props: readonly K[]): {
            <T extends Record<K, unknown>>(data: T): Partial<Pick<T, K>>;
            <T extends Record<K, unknown>>(data: T[]): Array<Partial<Pick<T, K>>>;
        };
    };
    groupBy: {
        <T>(grouper: (x: T) => string | number, arr: T[]): Record<string, T[]>;
        <T, K extends keyof T>(grouper: K, arr: T[]): Record<string, T[]>;
        <T>(grouper: (x: T) => string | number): (arr: T[]) => Record<string, T[]>;
        <K extends string | number>(grouper: K): <T extends Record<K, string | number>>(arr: T[]) => Record<string, T[]>;
    };
    gt: {
        (a: number, b: number, ...extra: unknown[]): boolean;
        (a: number): (b: number, ...extra: unknown[]) => boolean;
    };
    gte: {
        (a: number, b: number, ...extra: unknown[]): boolean;
        (a: number): (b: number, ...extra: unknown[]) => boolean;
    };
    has: {
        (b: string, a: {}, ...extra: unknown[]): boolean;
        (b: string): (a: {}, ...extra: unknown[]) => boolean;
    };
    head: <T>(arr: [T]) => T;
    identity: <T>(a: T) => T;
    ifElse: {
        (c: Function, b: Function, a: () => boolean, ...extra: unknown[]): any;
        (c: Function, b: Function): (a: () => boolean, ...extra: unknown[]) => any;
        (c: Function): {
            (b: Function, a: () => boolean, ...extra: unknown[]): any;
            (b: Function): (a: () => boolean, ...extra: unknown[]) => any;
        };
    };
    includes: {
        (b: unknown, a: import("./contains").IncludesTarget, ...extra: unknown[]): boolean;
        (b: unknown): (a: import("./contains").IncludesTarget, ...extra: unknown[]) => boolean;
    };
    isEven: (num: number) => boolean;
    isOdd: (number: number) => boolean;
    last: typeof last;
    lt: {
        (a: number, b: number, ...extra: unknown[]): boolean;
        (a: number): (b: number, ...extra: unknown[]) => boolean;
    };
    lte: {
        (a: number, b: number, ...extra: unknown[]): boolean;
        (a: number): (b: number, ...extra: unknown[]) => boolean;
    };
    map: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    mapKeys: {
        <T extends object, K extends keyof T, R extends string>(fn: (x: K) => R, obj: T): Record<R, T[K]>;
        <T extends object, K extends keyof T, R extends string>(fn: (x: K) => R): (obj: T) => Record<R, T[K]>;
    };
    mapValues: {
        (b: unknown, a: unknown, ...extra: unknown[]): Record<string, unknown>;
        (b: unknown): (a: unknown, ...extra: unknown[]) => Record<string, unknown>;
    };
    minus: {
        (b: number, a: number, ...extra: unknown[]): number;
        (b: number): (a: number, ...extra: unknown[]) => number;
    };
    multiply: {
        (a: number, b: number, ...extra: unknown[]): number;
        (a: number): (b: number, ...extra: unknown[]) => number;
    };
    noop: () => void;
    or: {
        (a: any, b: any, ...extra: unknown[]): boolean;
        (a: any): (b: any, ...extra: unknown[]) => boolean;
    };
    pipe: typeof pipe;
    placeholder: any;
    pluck: {
        <T, K extends keyof T>(prop: K, collection: T[]): T[K][];
        <K extends PropertyKey>(prop: K): <T extends Record<K, unknown>>(collection: T[]) => T[K][];
    };
    plus: {
        (a: number, b: number, ...extra: unknown[]): number;
        (a: number): (b: number, ...extra: unknown[]) => number;
    };
    replace: {
        (c: string, b: RegExp, a: string, ...extra: unknown[]): string;
        (c: string, b: RegExp): (a: string, ...extra: unknown[]) => string;
        (c: string): {
            (b: RegExp, a: string, ...extra: unknown[]): string;
            (b: RegExp): (a: string, ...extra: unknown[]) => string;
        };
    };
    select: {
        <T, K extends keyof T>(props: readonly K[], data: T): Partial<Pick<T, K>>;
        <T, K extends keyof T>(props: readonly K[], data: T[]): Array<Partial<Pick<T, K>>>;
        <K extends PropertyKey>(props: readonly K[]): {
            <T extends Record<K, unknown>>(data: T): Partial<Pick<T, K>>;
            <T extends Record<K, unknown>>(data: T[]): Array<Partial<Pick<T, K>>>;
        };
    };
    self: <T>(a: T) => T;
    sortBy: {
        (c: unknown, b: unknown, a: unknown, ...extra: unknown[]): Record<string, unknown>[];
        (c: unknown, b: unknown): (a: unknown, ...extra: unknown[]) => Record<string, unknown>[];
        (c: unknown): {
            (b: unknown, a: unknown, ...extra: unknown[]): Record<string, unknown>[];
            (b: unknown): (a: unknown, ...extra: unknown[]) => Record<string, unknown>[];
        };
    };
    tail: typeof tail;
    take: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    test: {
        (b: RegExp, a: string, ...extra: unknown[]): boolean;
        (b: RegExp): (a: string, ...extra: unknown[]) => boolean;
    };
    toLower: (str: string) => string;
    toUpper: (str: string) => string;
    trim: (str: string) => string;
    type: (val: any) => string;
    uniq: <T>(arr: T[]) => T[];
    uniqBy: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    both: {
        (a: any, b: any, ...extra: unknown[]): boolean;
        (a: any): (b: any, ...extra: unknown[]) => boolean;
    };
    conjunction: {
        (a: any, b: any, ...extra: unknown[]): boolean;
        (a: any): (b: any, ...extra: unknown[]) => boolean;
    };
    some: {
        (b: unknown, a: unknown, ...extra: unknown[]): boolean;
        (b: unknown): (a: unknown, ...extra: unknown[]) => boolean;
    };
    anyPass: {
        (b: unknown, a: unknown, ...extra: unknown[]): boolean;
        (b: unknown): (a: unknown, ...extra: unknown[]) => boolean;
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
        (a: unknown, b: unknown, ...extra: unknown[]): unknown;
        (a: unknown): (b: unknown, ...extra: unknown[]) => unknown;
    };
    includesValue: {
        (b: unknown, a: import("./contains").IncludesTarget, ...extra: unknown[]): boolean;
        (b: unknown): (a: import("./contains").IncludesTarget, ...extra: unknown[]) => boolean;
    };
    containsValue: {
        (b: unknown, a: import("./contains").IncludesTarget, ...extra: unknown[]): boolean;
        (b: unknown): (a: import("./contains").IncludesTarget, ...extra: unknown[]) => boolean;
    };
    member: {
        (b: unknown, a: import("./contains").IncludesTarget, ...extra: unknown[]): boolean;
        (b: unknown): (a: import("./contains").IncludesTarget, ...extra: unknown[]) => boolean;
    };
    memberOf: {
        (b: unknown, a: import("./contains").IncludesTarget, ...extra: unknown[]): boolean;
        (b: unknown): (a: import("./contains").IncludesTarget, ...extra: unknown[]) => boolean;
    };
    inList: {
        (b: unknown, a: import("./contains").IncludesTarget, ...extra: unknown[]): boolean;
        (b: unknown): (a: import("./contains").IncludesTarget, ...extra: unknown[]) => boolean;
    };
    countIf: {
        (b: unknown, a: unknown, ...extra: unknown[]): number;
        (b: unknown): (a: unknown, ...extra: unknown[]) => number;
    };
    tallyWhere: {
        (b: unknown, a: unknown, ...extra: unknown[]): number;
        (b: unknown): (a: unknown, ...extra: unknown[]) => number;
    };
    autoCurry: typeof curry;
    curryR: typeof curryRight;
    rightCurry: typeof curryRight;
    reverseCurry: typeof curryRight;
    trace: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown;
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown;
    };
    inspect: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown;
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown;
    };
    peek: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown;
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown;
    };
    cloneDeep: typeof deepClone;
    copyDeep: typeof deepClone;
    deepCopy: typeof deepClone;
    sortWith: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    sortOn: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    orderWith: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    order: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    orderOn: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    forEachDeep: {
        (b: (value: unknown) => unknown, a: object, ...extra: unknown[]): void;
        (b: (value: unknown) => unknown): (a: object, ...extra: unknown[]) => void;
    };
    eachDeep: {
        (b: (value: unknown) => unknown, a: object, ...extra: unknown[]): void;
        (b: (value: unknown) => unknown): (a: object, ...extra: unknown[]) => void;
    };
    walkDeep: {
        (b: (value: unknown) => unknown, a: object, ...extra: unknown[]): void;
        (b: (value: unknown) => unknown): (a: object, ...extra: unknown[]) => void;
    };
    mapDeep: {
        (b: (x: unknown) => unknown, a: object, ...extra: unknown[]): object;
        (b: (x: unknown) => unknown): (a: object, ...extra: unknown[]) => object;
    };
    deepTransform: {
        (b: (x: unknown) => unknown, a: object, ...extra: unknown[]): object;
        (b: (x: unknown) => unknown): (a: object, ...extra: unknown[]) => object;
    };
    all: {
        (b: unknown, a: unknown, ...extra: unknown[]): boolean;
        (b: unknown): (a: unknown, ...extra: unknown[]) => boolean;
    };
    allPass: {
        (b: unknown, a: unknown, ...extra: unknown[]): boolean;
        (b: unknown): (a: unknown, ...extra: unknown[]) => boolean;
    };
    eachPasses: {
        (b: unknown, a: unknown, ...extra: unknown[]): boolean;
        (b: unknown): (a: unknown, ...extra: unknown[]) => boolean;
    };
    where: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    selectWhere: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    keep: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    keepIf: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    keepWhere: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    selectIf: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    findFirst: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown;
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown;
    };
    firstWhere: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown;
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown;
    };
    indexWhere: {
        (b: unknown, a: unknown, ...extra: unknown[]): number;
        (b: unknown): (a: unknown, ...extra: unknown[]) => number;
    };
    findPosition: {
        (b: unknown, a: unknown, ...extra: unknown[]): number;
        (b: unknown): (a: unknown, ...extra: unknown[]) => number;
    };
    positionWhere: {
        (b: unknown, a: unknown, ...extra: unknown[]): number;
        (b: unknown): (a: unknown, ...extra: unknown[]) => number;
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
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    forEachItem: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    walk: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    eachValue: {
        (b: (x: any) => any, a: {}, ...extra: unknown[]): {};
        (b: (x: any) => any): (a: {}, ...extra: unknown[]) => {};
    };
    forEachValue: {
        (b: (x: any) => any, a: {}, ...extra: unknown[]): {};
        (b: (x: any) => any): (a: {}, ...extra: unknown[]) => {};
    };
    walkValues: {
        (b: (x: any) => any, a: {}, ...extra: unknown[]): {};
        (b: (x: any) => any): (a: {}, ...extra: unknown[]) => {};
    };
    prop: {
        <T, K extends keyof T>(property: K, object: T): T[K];
        <K extends PropertyKey>(property: K): <T extends Record<K, unknown>>(object: T) => T[K];
    };
    property: {
        <T, K extends keyof T>(property: K, object: T): T[K];
        <K extends PropertyKey>(property: K): <T extends Record<K, unknown>>(object: T) => T[K];
    };
    lookup: {
        <T, K extends keyof T>(property: K, object: T): T[K];
        <K extends PropertyKey>(property: K): <T extends Record<K, unknown>>(object: T) => T[K];
    };
    propOr: {
        (c: unknown, b: any, a: {}, ...extra: unknown[]): unknown;
        (c: unknown, b: any): (a: {}, ...extra: unknown[]) => unknown;
        (c: unknown): {
            (b: any, a: {}, ...extra: unknown[]): unknown;
            (b: any): (a: {}, ...extra: unknown[]) => unknown;
        };
    };
    getDefault: {
        (c: unknown, b: any, a: {}, ...extra: unknown[]): unknown;
        (c: unknown, b: any): (a: {}, ...extra: unknown[]) => unknown;
        (c: unknown): {
            (b: any, a: {}, ...extra: unknown[]): unknown;
            (b: any): (a: {}, ...extra: unknown[]) => unknown;
        };
    };
    getWithDefault: {
        (c: unknown, b: any, a: {}, ...extra: unknown[]): unknown;
        (c: unknown, b: any): (a: {}, ...extra: unknown[]) => unknown;
        (c: unknown): {
            (b: any, a: {}, ...extra: unknown[]): unknown;
            (b: any): (a: {}, ...extra: unknown[]) => unknown;
        };
    };
    pick: {
        <T, K extends keyof T>(props: readonly K[], data: T): Partial<Pick<T, K>>;
        <T, K extends keyof T>(props: readonly K[], data: T[]): Array<Partial<Pick<T, K>>>;
        <K extends PropertyKey>(props: readonly K[]): {
            <T extends Record<K, unknown>>(data: T): Partial<Pick<T, K>>;
            <T extends Record<K, unknown>>(data: T[]): Array<Partial<Pick<T, K>>>;
        };
    };
    pickKeys: {
        <T, K extends keyof T>(props: readonly K[], data: T): Partial<Pick<T, K>>;
        <T, K extends keyof T>(props: readonly K[], data: T[]): Array<Partial<Pick<T, K>>>;
        <K extends PropertyKey>(props: readonly K[]): {
            <T extends Record<K, unknown>>(data: T): Partial<Pick<T, K>>;
            <T extends Record<K, unknown>>(data: T[]): Array<Partial<Pick<T, K>>>;
        };
    };
    selectKeys: {
        <T, K extends keyof T>(props: readonly K[], data: T): Partial<Pick<T, K>>;
        <T, K extends keyof T>(props: readonly K[], data: T[]): Array<Partial<Pick<T, K>>>;
        <K extends PropertyKey>(props: readonly K[]): {
            <T extends Record<K, unknown>>(data: T): Partial<Pick<T, K>>;
            <T extends Record<K, unknown>>(data: T[]): Array<Partial<Pick<T, K>>>;
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
        (a: number, b: number, ...extra: unknown[]): boolean;
        (a: number): (b: number, ...extra: unknown[]) => boolean;
    };
    isGreaterThan: {
        (a: number, b: number, ...extra: unknown[]): boolean;
        (a: number): (b: number, ...extra: unknown[]) => boolean;
    };
    greaterThanOrEqual: {
        (a: number, b: number, ...extra: unknown[]): boolean;
        (a: number): (b: number, ...extra: unknown[]) => boolean;
    };
    isAtLeast: {
        (a: number, b: number, ...extra: unknown[]): boolean;
        (a: number): (b: number, ...extra: unknown[]) => boolean;
    };
    hasKey: {
        (b: string, a: {}, ...extra: unknown[]): boolean;
        (b: string): (a: {}, ...extra: unknown[]) => boolean;
    };
    hasProp: {
        (b: string, a: {}, ...extra: unknown[]): boolean;
        (b: string): (a: {}, ...extra: unknown[]) => boolean;
    };
    hasOwnKey: {
        (b: string, a: {}, ...extra: unknown[]): boolean;
        (b: string): (a: {}, ...extra: unknown[]) => boolean;
    };
    id: <T>(a: T) => T;
    selfRef: <T>(a: T) => T;
    noopValue: <T>(a: T) => T;
    identityValue: <T>(a: T) => T;
    same: <T>(a: T) => T;
    idValue: <T>(a: T) => T;
    whenElse: {
        (c: Function, b: Function, a: () => boolean, ...extra: unknown[]): any;
        (c: Function, b: Function): (a: () => boolean, ...extra: unknown[]) => any;
        (c: Function): {
            (b: Function, a: () => boolean, ...extra: unknown[]): any;
            (b: Function): (a: () => boolean, ...extra: unknown[]) => any;
        };
    };
    branch: {
        (c: Function, b: Function, a: () => boolean, ...extra: unknown[]): any;
        (c: Function, b: Function): (a: () => boolean, ...extra: unknown[]) => any;
        (c: Function): {
            (b: Function, a: () => boolean, ...extra: unknown[]): any;
            (b: Function): (a: () => boolean, ...extra: unknown[]) => any;
        };
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
        (a: number, b: number, ...extra: unknown[]): boolean;
        (a: number): (b: number, ...extra: unknown[]) => boolean;
    };
    isLessThan: {
        (a: number, b: number, ...extra: unknown[]): boolean;
        (a: number): (b: number, ...extra: unknown[]) => boolean;
    };
    lessThanOrEqual: {
        (a: number, b: number, ...extra: unknown[]): boolean;
        (a: number): (b: number, ...extra: unknown[]) => boolean;
    };
    isAtMost: {
        (a: number, b: number, ...extra: unknown[]): boolean;
        (a: number): (b: number, ...extra: unknown[]) => boolean;
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
        (b: unknown, a: unknown, ...extra: unknown[]): Record<string, unknown>;
        (b: unknown): (a: unknown, ...extra: unknown[]) => Record<string, unknown>;
    };
    mapObjectValues: {
        (b: unknown, a: unknown, ...extra: unknown[]): Record<string, unknown>;
        (b: unknown): (a: unknown, ...extra: unknown[]) => Record<string, unknown>;
    };
    subtract: {
        (b: number, a: number, ...extra: unknown[]): number;
        (b: number): (a: number, ...extra: unknown[]) => number;
    };
    sub: {
        (b: number, a: number, ...extra: unknown[]): number;
        (b: number): (a: number, ...extra: unknown[]) => number;
    };
    difference: {
        (b: number, a: number, ...extra: unknown[]): number;
        (b: number): (a: number, ...extra: unknown[]) => number;
    };
    doNothing: () => void;
    noopFn: () => void;
    pass: () => void;
    either: {
        (a: any, b: any, ...extra: unknown[]): boolean;
        (a: any): (b: any, ...extra: unknown[]) => boolean;
    };
    disjunction: {
        (a: any, b: any, ...extra: unknown[]): boolean;
        (a: any): (b: any, ...extra: unknown[]) => boolean;
    };
    flow: typeof pipe;
    composeLeft: typeof pipe;
    chain: typeof pipe;
    __: any;
    hole: any;
    argPlaceholder: any;
    mapProp: {
        <T, K extends keyof T>(prop: K, collection: T[]): T[K][];
        <K extends PropertyKey>(prop: K): <T extends Record<K, unknown>>(collection: T[]) => T[K][];
    };
    projectProp: {
        <T, K extends keyof T>(prop: K, collection: T[]): T[K][];
        <K extends PropertyKey>(prop: K): <T extends Record<K, unknown>>(collection: T[]) => T[K][];
    };
    extractProp: {
        <T, K extends keyof T>(prop: K, collection: T[]): T[K][];
        <K extends PropertyKey>(prop: K): <T extends Record<K, unknown>>(collection: T[]) => T[K][];
    };
    propertyValues: {
        <T, K extends keyof T>(prop: K, collection: T[]): T[K][];
        <K extends PropertyKey>(prop: K): <T extends Record<K, unknown>>(collection: T[]) => T[K][];
    };
    add: {
        (a: number, b: number, ...extra: unknown[]): number;
        (a: number): (b: number, ...extra: unknown[]) => number;
    };
    sum2: {
        (a: number, b: number, ...extra: unknown[]): number;
        (a: number): (b: number, ...extra: unknown[]) => number;
    };
    add2: {
        (a: number, b: number, ...extra: unknown[]): number;
        (a: number): (b: number, ...extra: unknown[]) => number;
    };
    sum: {
        (a: number, b: number, ...extra: unknown[]): number;
        (a: number): (b: number, ...extra: unknown[]) => number;
    };
    orderBy: {
        (c: unknown, b: unknown, a: unknown, ...extra: unknown[]): Record<string, unknown>[];
        (c: unknown, b: unknown): (a: unknown, ...extra: unknown[]) => Record<string, unknown>[];
        (c: unknown): {
            (b: unknown, a: unknown, ...extra: unknown[]): Record<string, unknown>[];
            (b: unknown): (a: unknown, ...extra: unknown[]) => Record<string, unknown>[];
        };
    };
    sortByKey: {
        (c: unknown, b: unknown, a: unknown, ...extra: unknown[]): Record<string, unknown>[];
        (c: unknown, b: unknown): (a: unknown, ...extra: unknown[]) => Record<string, unknown>[];
        (c: unknown): {
            (b: unknown, a: unknown, ...extra: unknown[]): Record<string, unknown>[];
            (b: unknown): (a: unknown, ...extra: unknown[]) => Record<string, unknown>[];
        };
    };
    rest: typeof tail;
    dropFirst: typeof tail;
    takeLeft: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    firstN: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    headN: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    takeN: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    matches: {
        (b: RegExp, a: string, ...extra: unknown[]): boolean;
        (b: RegExp): (a: string, ...extra: unknown[]) => boolean;
    };
    regexTest: {
        (b: RegExp, a: string, ...extra: unknown[]): boolean;
        (b: RegExp): (a: string, ...extra: unknown[]) => boolean;
    };
    isMatch: {
        (b: RegExp, a: string, ...extra: unknown[]): boolean;
        (b: RegExp): (a: string, ...extra: unknown[]) => boolean;
    };
    testRegex: {
        (b: RegExp, a: string, ...extra: unknown[]): boolean;
        (b: RegExp): (a: string, ...extra: unknown[]) => boolean;
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
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    uniqueBy: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    dedupeBy: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    nubBy: {
        (b: unknown, a: unknown, ...extra: unknown[]): unknown[];
        (b: unknown): (a: unknown, ...extra: unknown[]) => unknown[];
    };
    replaceAll: {
        (c: string, b: RegExp, a: string, ...extra: unknown[]): string;
        (c: string, b: RegExp): (a: string, ...extra: unknown[]) => string;
        (c: string): {
            (b: RegExp, a: string, ...extra: unknown[]): string;
            (b: RegExp): (a: string, ...extra: unknown[]) => string;
        };
    };
};
export default tikka;
//# sourceMappingURL=tikka.d.ts.map