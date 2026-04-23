'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function pipe(...fns) {
    if (fns.length === 0) {
        return (value) => value;
    }
    return (...args) => {
        let index = 1;
        let acc = fns[0](...args);
        while (index < fns.length) {
            acc = fns[index](acc);
            index += 1;
        }
        return acc;
    };
}

exports.default = pipe;
//# sourceMappingURL=pipe.cjs.map
