import self from './self'

/**
 * Alias of `self`; returns the provided value unchanged.
 * @param value - Any value.
 * @returns The exact same value reference.
 *
 * @example
 * identity({ ok: true })
 */
const identity = self

export default identity
