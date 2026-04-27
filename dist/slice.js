function slice(start, endOrStr, maybeStr) {
    if (typeof endOrStr === 'string') {
        return endOrStr.slice(start);
    }
    return maybeStr.slice(start, endOrStr);
}

export { slice as default };
//# sourceMappingURL=slice.js.map
