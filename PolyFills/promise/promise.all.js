// Polyfill for Promise.all

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    const total = promises.length;
    if (total === 0) return resolve([]);

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then(value => {
          results[index] = value;
          completed++;

          if (completed === total) {
            resolve(results);
          }
        })
        .catch(err => reject(err));
    });
  });
};

// Example usage:
const p1 = Promise.resolve(3);
const p2 = 42;
const p3 = new Promise((resolve, reject) => {
 // setTimeout(callback, delay, ...args);
  setTimeout(resolve, 100, 'foo');
});

Promise.myAll([p1, p2, p3]).then(values => {
    console.log(values); // [3, 42, "foo"]
    }   
).catch(err => {
    console.error(err);
});    
