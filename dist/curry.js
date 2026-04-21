const curry = (fn, arity = fn.length) => {
    const createCachedFunc = (fn, arity, existingArgs = []) => (...args) => {
        return ((fn, arity, existingArgs = []) => {
            const newArgs = Array.from(args);
            const currentArgs = existingArgs.concat(newArgs);
            if (currentArgs.length === arity)
                return fn(...currentArgs);
            if (currentArgs.length > arity)
                console.warn('Too many arguments passed to curried func.');
            return createCachedFunc(fn, arity, currentArgs);
        })(fn, arity, existingArgs);
    };
    return createCachedFunc(fn, arity);
};

export { curry as default };
//# sourceMappingURL=curry.js.map
