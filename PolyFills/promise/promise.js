// promise polyfill for older browsers


function MyPromise(executor) {
    let onResolve, onReject;
    let isResolved = false, isRejected = false;
    let value, reason;

    const resolve = (val) => {
        isResolved = true;
        value = val;
        if (typeof onResolve === "function") onResolve(value);
    };

    const reject = (err) => {
        isRejected = true;
        reason = err;
        if (typeof onReject === "function") onReject(reason);
    };

    this.then = function(callback) {
        onResolve = callback;
        if (isResolved) onResolve(value);
        return this; // for chaining
    };

    this.catch = function(callback) {
        onReject = callback;
        if (isRejected) onReject(reason);
        return this;
    };

    try {
        executor(resolve, reject);
    } catch (err) {
        reject(err);
    }
}



const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
        // reject("Error!");
    }, 1000);
});


promise
    .then((res) => console.log("Resolved:", res))
    .catch((err) => console.log("Rejected:", err));

