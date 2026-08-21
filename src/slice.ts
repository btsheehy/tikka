/**
 * Returns a sliced section of a string.
 * @param start - Zero-based start index.
 * @param endOrStr - End index in 3-arg form, or the target string in 2-arg form.
 * @param maybeStr - Target string in the 3-arg form.
 * @returns Substring produced by `String.prototype.slice`.
 *
 * @example
 * slice(0, 5, 'functional') // 'funct'
 */
function slice(start: number, str: string): string
function slice(start: number, end: number, str: string): string

function slice(start: number, endOrStr: number | string, maybeStr?: string) {
  if (typeof endOrStr === 'string') {
    return endOrStr.slice(start)
  }

  return (maybeStr as string).slice(start, endOrStr)
}

export default slice
