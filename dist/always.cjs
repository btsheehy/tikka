'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Creates a zero-argument function that always returns the provided value.
 *
 * @param arg - The value to capture and return on every invocation.
 * @returns A new function that ignores its inputs and returns `arg`.
 *
 * @example
 * const alwaysFive = always(5)
 * alwaysFive() // 5
 */
const always = (arg) => () => arg;

exports.default = always;
//# sourceMappingURL=always.cjs.map
