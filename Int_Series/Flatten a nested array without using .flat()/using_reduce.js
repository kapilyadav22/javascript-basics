function flattenReduce(arr) {
    return arr.reduce((acc, curr) => {
        return acc.concat(Array.isArray(curr) ? flattenReduce(curr) : curr);
    }, []);
}

console.log(flattenReduce([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
