//promise with chaining support

function MyPromise(executor) {
    let onResolve, onReject;
    let isResolved = false, isRejected = false;
    let isCalled = false;
    let value, reason;

    const resolve = (val) => {
        if (isCalled) return;
        isResolved = true;
        value = val;
        isCalled = true;
        if (typeof onResolve === "function") {
            try {
                const result = onResolve(value);
                // If result is a promise, adopt its state
                if (result instanceof MyPromise) {
                    result.then(nextResolve, nextReject);
                } else {
                    nextResolve(result);
                }
            } catch (err) {
                nextReject(err);
            }
        }
    };

    const reject = (err) => {
        if (isCalled) return;
        isRejected = true;
        reason = err;
        isCalled = true;
        if (typeof onReject === "function") {
            try {
                const result = onReject(reason);
                if (result instanceof MyPromise) {
                    result.then(nextResolve, nextReject);
                } else {
                    nextResolve(result);
                }
            } catch (err) {
                nextReject(err);
            }
        }
    };

    // placeholders for chaining
    let nextResolve, nextReject;

    this.then = function(callback) {
        return new MyPromise((resolveNext, rejectNext) => {
            nextResolve = resolveNext;
            nextReject = rejectNext;
            onResolve = callback;
            if (isResolved && !isCalled) {
                resolve(value);
            }
        });
    };

    this.catch = function(callback) {
        return new MyPromise((resolveNext, rejectNext) => {
            nextResolve = resolveNext;
            nextReject = rejectNext;
            onReject = callback;
            if (isRejected && !isCalled) {
                reject(reason);
            }
        });
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
    }, 1000);
});

promise
    .then(res => {
        console.log("Resolved:", res);
        return res + " updated";
    })
    .then(res => {
        console.log("Chained:", res);
    })
    .catch(err => {
        console.log("Rejected:", err);
    });

    