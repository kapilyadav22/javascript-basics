// Memoization is an optimization technique used to speed up function calls
//  by caching the results of expensive function calls and returning the cached 
// result when the same inputs occur again.
// Implement a memoization function that takes a function as an argument and 
// returns a memoized version of that function.
//  The memoized function should cache the results based on the
// arguments passed to it.

function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = args.map(arg => {
            if (typeof arg === 'object' && arg != null) {
                return JSON.stringify(Object.entries(arg).sort());
            }
            return JSON.stringify(arg);
        }).join('|');

        if (cache.has(key)) return cache.get(key);

        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Example usage:
const slowFunction = (num) => {
    // Simulate a time-consuming computation
    for (let i = 0; i < 1e6; i++);
    return num * 2;
};

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); // Computation happens, result is 10
console.log(memoizedFunction(5)); // Cached result is returned, result is 10
console.log(memoizedFunction(10)); // Computation happens, result is 20
console.log(memoizedFunction(10)); // Cached result is returned, result is 20

//sorting the object, because {a:10, b:5} is same as {b:5, a:10}