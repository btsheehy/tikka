/**
 * Composes functions left-to-right.
 * @param fns - Functions to run in sequence; each result feeds the next function.
 * @returns A function that executes the pipeline, or identity when no functions are provided.
 *
 * @example
 * const normalize = pipe(trim, toLower)
 * normalize('  Hello  ') // 'hello'
 */
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

export { pipe as default };
//# sourceMappingURL=pipe.js.map
