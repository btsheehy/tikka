import curryRight from './curryRight.js';

const lowestBy = (arr, fn) => {
    let li = 0;
    let l = fn(arr[0]);
    let i = 1;
    while (i < arr.length) {
        const c = fn(arr[i]);
        if (c < l) {
            l = c;
            li = i;
        }
        i++;
    }
    return arr[li];
};
var lowestBy$1 = curryRight(lowestBy);

export { lowestBy$1 as default };
//# sourceMappingURL=lowestBy.js.map
