function curry(fn, arity = fn.length) {
    const createCachedFunc = (existingArgs = []) => {
        return (...args) => {
            const currentArgs = existingArgs.concat(args);
            if (currentArgs.length >= arity) {
                if (currentArgs.length > arity) {
                    console.warn('Too many arguments passed to curried func.');
                }
                return fn(...currentArgs.slice(0, arity));
            }
            return createCachedFunc(currentArgs);
        };
    };
    return createCachedFunc();
}

export { curry as default };
//# sourceMappingURL=curry.js.map
