'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const pipe = (...fns) => (val) => fns.reduce((acc, fn) => fn(acc), val);

exports.default = pipe;
//# sourceMappingURL=pipe.cjs.map
