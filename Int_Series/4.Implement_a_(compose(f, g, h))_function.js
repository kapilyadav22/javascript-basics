// 5. Implement a function to compose multiple functions (compose(f, g, h)).

//compose(f, g, h)(x) === f(g(h(x)))

function compose(...funcs) {
  return function (initialValue) {
    return funcs.reduceRight((acc, fn) => fn(acc), initialValue);
  };
}


// Example usage:
const add2 = (x) => x + 2;
const multiply3 = (x) => x * 3;
const subtract5 = (x) => x - 5;

const composedFunction = compose(add2, multiply3, subtract5);
console.log(composedFunction(5)); // Output: 16
// Explanation: subtract5(5) -> 0, multiply3(0) -> 0, add2(0) -> 2


/*
How it works
...funcs collects all functions into an array.
reduceRight iterates from the last function to the first.
acc keeps the intermediate result.
initialValue is passed to the last function first.
*/