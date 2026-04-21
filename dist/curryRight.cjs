'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function curryRight(fn, arity = fn.length) {
    const createCachedFunc = (fn, arity, existingArgs = []) => (...args) => {
        return ((fn, arity, existingArgs = []) => {
            const newArgs = Array.from(args);
            const currentArgs = existingArgs.concat(newArgs);
            if (currentArgs.length === arity)
                return fn(...currentArgs.reverse());
            if (currentArgs.length > arity)
                console.warn('Too many arguments passed to curried func.');
            return createCachedFunc(fn, arity, currentArgs);
        })(fn, arity, existingArgs);
    };
    return createCachedFunc(fn, arity);
}

exports.default = curryRight;
//# sourceMappingURL=curryRight.cjs.map
