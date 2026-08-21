function curryRight(fn, arity = fn.length) {
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
        return function f2(b, a) {
            switch (arguments.length) {
                case 0:
                    return f2;
                case 1:
                    return function f1(nextA) {
                        switch (arguments.length) {
                            case 0:
                                return f1;
                            case 1:
                                return fn(nextA, b);
                            default:
                                warnTooManyArguments();
                                return fn(nextA, b);
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
        return function f3(c, b, a) {
            switch (arguments.length) {
                case 0:
                    return f3;
                case 1:
                    return function f3_1(nextB, nextA) {
                        switch (arguments.length) {
                            case 0:
                                return f3_1;
                            case 1:
                                return function f3_1_1(lastA) {
                                    switch (arguments.length) {
                                        case 0:
                                            return f3_1_1;
                                        case 1:
                                            return fn(lastA, nextB, c);
                                        default:
                                            warnTooManyArguments();
                                            return fn(lastA, nextB, c);
                                    }
                                };
                            case 2:
                                return fn(nextA, nextB, c);
                            default:
                                warnTooManyArguments();
                                return fn(nextA, nextB, c);
                        }
                    };
                case 2:
                    return function f3_2(nextA) {
                        switch (arguments.length) {
                            case 0:
                                return f3_2;
                            case 1:
                                return fn(nextA, b, c);
                            default:
                                warnTooManyArguments();
                                return fn(nextA, b, c);
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
                let readIndex = arity - 1;
                let writeIndex = 0;
                while (readIndex >= 0) {
                    if (readIndex < existingArgs.length) {
                        finalArgs[writeIndex] = existingArgs[readIndex];
                    }
                    else {
                        finalArgs[writeIndex] = args[readIndex - existingArgs.length];
                    }
                    readIndex -= 1;
                    writeIndex += 1;
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

export { curryRight as default };
//# sourceMappingURL=curryRight.js.map
