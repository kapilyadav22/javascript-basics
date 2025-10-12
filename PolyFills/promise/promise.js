// promise polyfill for older browsers

function MyPromise(executor) {
    let onResolve, onReject;
    let isResolved = false, isRejected = false;
    let isCalled = false;
    let value, reason;

    const resolve = (val) => {
        isResolved = true;
        value = val;
       
        if (typeof onResolve === "function" && !isCalled){ 
            onResolve(value);
            isCalled = true;
        }
    };

    const reject = (err) => {
        isRejected = true;
        reason = err;
       if (typeof onReject === "function"  && !isCalled){
            onReject(reason);
            isCalled = true;
        }
    };

    this.then = function(callback) {
        onResolve = callback;
        if (isResolved && !isCalled){
            isCalled = true;
            onResolve(value);
        } 
        return this; 
    };

    this.catch = function(callback) {
        onReject = callback;
        if (isRejected && !isCalled){ 
            onReject(reason);
            isCalled = true;
        }
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
        reject("Error!");
    }, 1000);
});


promise
    .then((res) => console.log("Resolved:", res))
    .catch((err) => console.log("Rejected:", err));


//Note: The polyfill does not support chaining of then() and catch() methods.
