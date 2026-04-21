import filter from './filter.js';

const compact = (arr) => {
    return filter((value) => value != null, arr);
};

export { compact as default };
//# sourceMappingURL=compact.js.map
