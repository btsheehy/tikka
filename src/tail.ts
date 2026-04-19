function tail<T>(arr: T[]): T[]
function tail(str: string): string

function tail(value: any) {
  return value.slice(1)
}

export default tail
