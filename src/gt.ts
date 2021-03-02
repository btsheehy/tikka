import curry from './curry'

const gt = (a: number, b: number) => a > b

export default curry(gt)
