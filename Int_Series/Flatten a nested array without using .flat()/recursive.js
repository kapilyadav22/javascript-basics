function flattenRecursive(arr) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenRecursive(item)); 
        } else {
            result.push(item);
        }
    }
    return result;
}

const nested = [1, [2, [3, 4], 5], 6];
console.log(flattenRecursive(nested)); // [1, 2, 3, 4, 5, 6]
