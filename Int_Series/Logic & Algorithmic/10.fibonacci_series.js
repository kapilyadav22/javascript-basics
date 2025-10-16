//fibonacci Series

function generateFibonacci(n) {
       if (n <= 0) return [];
        if (n === 1) return [0];
        if (n === 2) return [0,1];

    const prev = generateFibonacci(n - 1);
    prev.push(prev[prev.length - 1] + prev[prev.length - 2]);
    return prev;
}


//Example:
console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(generateFibonacci(5));  // Output: [0, 1, 1, 2, 3]


/*
Print fibonacci number at nth position   
function fibonacci(n, memo = {}) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    if (memo[n]) return memo[n]; 

    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
}


*/