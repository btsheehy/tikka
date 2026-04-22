'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function curryRight(fn, arity = fn.length) {
    const createCachedFunc = (existingArgs = []) => {
        return (...args) => {
            const currentArgs = existingArgs.concat(args);
            if (currentArgs.length >= arity) {
                if (currentArgs.length > arity) {
                    console.warn('Too many arguments passed to curried func.');
                }
                return fn(...currentArgs.slice(0, arity).reverse());
            }
            return createCachedFunc(currentArgs);
        };
    };
    return createCachedFunc();
}

exports.default = curryRight;
//# sourceMappingURL=curryRight.cjs.map
