// Logging utility

function log(level) {
  return function(message) {
    console.log(`[${level}] ${message}`);
  };
}

const info = log("INFO");
const error = log("ERROR");

info("App started"); // [INFO] App started
error("Something went wrong"); // [ERROR] Something went wrong


//Generic Currying Function (Advanced)
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

function multiply(a, b, c) {
  return a * b * c;
}

// Using Lodash
// const curriedMultiply = _.curry(multiply);

const curriedMultiply = curry(multiply);

curriedMultiply(2)(3)(4); // 24
curriedMultiply(2, 3)(4); // 24
curriedMultiply(2)(3, 4); // 24
