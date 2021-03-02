import curry from './curry'

const and = (a: any, b: any): boolean => a && b

export default curry(and)
