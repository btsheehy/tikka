import curryRight from './curryRight.js';

const highestBy = (arr, fn) => {
    let hi = 0;
    let h = fn(arr[0]);
    let i = 1;
    while (i < arr.length) {
        const c = fn(arr[i]);
        if (c > h) {
            h = c;
            hi = i;
        }
        i++;
    }
    return arr[hi];
};
var highestBy$1 = curryRight(highestBy);

export { highestBy$1 as default };
//# sourceMappingURL=highestBy.js.map
