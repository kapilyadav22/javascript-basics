function MyPromise(executor) {
  let onResolve, onReject, fulfilled = false, rejected = false, value;
  const resolve = (val) => {
    fulfilled = true; value = val; if (onResolve) onResolve(val);
  };
  const reject = (err) => {
    rejected = true; value = err; if (onReject) onReject(err);
  };
  this.then = (cb) => (onResolve = cb, this);
  this.catch = (cb) => (onReject = cb, this);
  executor(resolve, reject);
}

// Example usage:
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

promise
  .then(result => {
    console.log(result); // "Done!" after 1 second
  })
  .catch(error => {
    console.error(error);
  });