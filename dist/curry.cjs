'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.default = curry;
//# sourceMappingURL=curry.cjs.map
