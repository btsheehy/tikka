/**
 * Returns a reversed copy of an array or string.
 *
 * The original input is not mutated.
 *
 * @param v - The array or string to reverse.
 * @returns A new reversed array when `v` is an array, or a reversed string when `v` is a string.
 *
 * @example
 * reverse([1, 2, 3]) // [3, 2, 1]
 *
 * @example
 * reverse('tikka') // 'akkit'
 */
const reverse = (v) => {
    if (Array.isArray(v)) {
        const newArr = [];
        let i = v.length - 1;
        while (i >= 0) {
            newArr.push(v[i]);
            i--;
        }
        return newArr;
    }
    let newStr = '';
    let i = v.length - 1;
    while (i >= 0) {
        newStr += v[i];
        i--;
    }
    return newStr;
};

export { reverse as default };
//# sourceMappingURL=reverse.js.map
