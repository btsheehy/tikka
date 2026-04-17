const pipe = (...fns) => (val) => fns.reduce((acc, fn) => fn(acc), val);

export { pipe as default };
//# sourceMappingURL=pipe.js.map
