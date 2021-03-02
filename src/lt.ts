import curry from './curry'

const lt = (a: number, b: number) => a < b

export default curry(lt)
