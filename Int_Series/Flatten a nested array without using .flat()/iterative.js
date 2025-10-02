function flattenIterative(arr) {
    const result = [];
    const stack = [...arr]; 

    while (stack.length) {
        const item = stack.pop();
        if (Array.isArray(item)) {
            stack.push(...item); 
        } else {
            result.push(item);
        }
    }

    return result.reverse(); 
}

const nested2 = [1, [2, [3, 4], 5], 6];
console.log(flattenIterative(nested2)); // [1, 2, 3, 4, 5, 6]
