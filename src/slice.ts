/**
 * Runs `str.slice(start, end?)`.
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
