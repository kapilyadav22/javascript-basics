// promise polyfill for older browsers

function MyPromise(executor) {
    let onResolve, onReject;
    let isResolved = false, isRejected = false;
    let isCalled = false;
    let value, reason;

    const resolve = (val) => {
        isResolved = true;
        value = val;
       
        //if resolve is called after then
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

  this.then = (callback) => {
    onResolve = callback;

    //if then is called after resolve
    if (isResolved && !isCalled) {
        isCalled = true;
        onResolve(value);
    }
    return this;
};

this.catch = (callback) => {
    onReject = callback;
    if (isRejected && !isCalled) {
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
        // resolve("Success!");
        reject("Error!");
    }, 1000);
});


promise
    .then((res) => console.log("Resolved:", res))
    .catch((err) => console.log("Rejected:", err));


//Note: The polyfill does not support chaining of then() and catch() methods.

/*
onResolve → stores the callback passed to .then().
onReject → stores the callback passed to .catch().
isResolved → true if resolve() was called.
isRejected → true if reject() was called.
isCalled → ensures that callbacks are called only once.
value → stores the resolved value.
reason → stores the rejection reason.


Handling timing issues:

Case 1: resolve() or reject() is called before .then() or .catch() is attached.
const promise = new MyPromise((resolve, reject) => {
    resolve("Success!");
});

promise.then(res => console.log(res));


====
In this case, since resolve() is called before then()
onResolve doesn’t exist yet, so nothing happens at that moment.
Later, when .then() is attached:
The callback is called immediately because isResolved is already true.



Case 2: .then() or .catch() is attached before resolve() or reject() is called.
const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 1000);
});

promise.then(res => console.log(res));


onResolve already exists when resolve() is called.
So we call onResolve(value) immediately inside resolve.

*/