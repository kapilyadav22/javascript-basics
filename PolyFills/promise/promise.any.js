/* Polyfill for Promise.any
Behavior:
Resolves with the first fulfilled promise.
If all reject, it rejects with an AggregateError.
*/

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    const errors = [];
    let rejectedCount = 0;
    const total = promises.length;

    if (total === 0) {
      // Spec behavior: reject with AggregateError if empty
      return reject(new AggregateError([], "All promises were rejected"));
    }

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then(resolve)
        .catch(err => {
          errors[index] = err;
          rejectedCount++;
          if (rejectedCount === total) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
};

// Example usage:
Promise.myAny([
  Promise.reject("A"),
  Promise.resolve("B"),
  Promise.resolve("C")
]).then(console.log)   // "B"
.catch(console.error);



//error case
// [AggregateError: All promises were rejected] {
//   [errors]: [ 'p1', 'p2' ]
// }


// Even after resolve() is called:
// JavaScript does NOT stop the forEach
// All other .then() callbacks still run
//so we need to track rejections carefully