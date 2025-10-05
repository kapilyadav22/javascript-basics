// Polyfill for Promise.allSettled()

/*
Waits for all promises to settle (either fulfilled or rejected)
and returns an array of { status, value | reason }.
*/
Promise.myAllSettled = function (promises) {
  return new Promise((resolve) => {
    const results = [];
    let completed = 0;
    const total = promises.length;

    if (total === 0) return resolve([]);

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then(value => {
          results[index] = { status: "fulfilled", value };
        })
        .catch(reason => {
          results[index] = { status: "rejected", reason };
        })
        .finally(() => {
          completed++;
          if (completed === total) {
            resolve(results);
          }
        });
    });
  });
};

// Example usage:
Promise.myAllSettled([
  Promise.resolve(1),
  Promise.reject("error")
]).then(console.log);

/*
Promise.allSettled() never rejects, even if some promises fail.
 This is the key difference between Promise.all() and Promise.allSettled().
*/