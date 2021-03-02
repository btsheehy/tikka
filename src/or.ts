import curry from './curry'

const or = (a: any, b: any) => !!(a || b)

export default curry(or)
