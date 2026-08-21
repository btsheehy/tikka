function curry(fn, arity = fn.length) {
    const warnTooManyArguments = () => {
        console.warn('Too many arguments passed to curried func.');
    };
    if (arity === 1) {
        return function f1(a) {
            switch (arguments.length) {
                case 0:
                    return f1;
                case 1:
                    return fn(a);
                default:
                    warnTooManyArguments();
                    return fn(a);
            }
        };
    }
    if (arity === 2) {
        return function f2(a, b) {
            switch (arguments.length) {
                case 0:
                    return f2;
                case 1:
                    return function f1(nextB) {
                        switch (arguments.length) {
                            case 0:
                                return f1;
                            case 1:
                                return fn(a, nextB);
                            default:
                                warnTooManyArguments();
                                return fn(a, nextB);
                        }
                    };
                case 2:
                    return fn(a, b);
                default:
                    warnTooManyArguments();
                    return fn(a, b);
            }
        };
    }
    if (arity === 3) {
        return function f3(a, b, c) {
            switch (arguments.length) {
                case 0:
                    return f3;
                case 1:
                    return function f3_1(nextB, nextC) {
                        switch (arguments.length) {
                            case 0:
                                return f3_1;
                            case 1:
                                return function f3_1_1(lastC) {
                                    switch (arguments.length) {
                                        case 0:
                                            return f3_1_1;
                                        case 1:
                                            return fn(a, nextB, lastC);
                                        default:
                                            warnTooManyArguments();
                                            return fn(a, nextB, lastC);
                                    }
                                };
                            case 2:
                                return fn(a, nextB, nextC);
                            default:
                                warnTooManyArguments();
                                return fn(a, nextB, nextC);
                        }
                    };
                case 2:
                    return function f3_2(nextC) {
                        switch (arguments.length) {
                            case 0:
                                return f3_2;
                            case 1:
                                return fn(a, b, nextC);
                            default:
                                warnTooManyArguments();
                                return fn(a, b, nextC);
                        }
                    };
                case 3:
                    return fn(a, b, c);
                default:
                    warnTooManyArguments();
                    return fn(a, b, c);
            }
        };
    }
    const createCurried = (existingArgs) => {
        return function curried(...args) {
            if (args.length === 0) {
                return curried;
            }
            const totalLength = existingArgs.length + args.length;
            if (totalLength >= arity) {
                if (totalLength > arity) {
                    warnTooManyArguments();
                }
                const finalArgs = new Array(arity);
                let i = 0;
                while (i < existingArgs.length && i < arity) {
                    finalArgs[i] = existingArgs[i];
                    i += 1;
                }
                let j = 0;
                while (i < arity) {
                    finalArgs[i] = args[j];
                    i += 1;
                    j += 1;
                }
                return fn(...finalArgs);
            }
            const nextArgs = new Array(totalLength);
            let i = 0;
            while (i < existingArgs.length) {
                nextArgs[i] = existingArgs[i];
                i += 1;
            }
            let j = 0;
            while (j < args.length) {
                nextArgs[i + j] = args[j];
                j += 1;
            }
            return createCurried(nextArgs);
        };
    };
    return createCurried([]);
}

export { curry as default };
//# sourceMappingURL=curry.js.map
