Array.prototype.myForEach = function(callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    const arr = this;
    for (let i = 0; i < arr.length; i++) {
        if (i in arr) { 
            callback.call(thisArg, arr[i], i, arr);
        }
    }
};

// Example usage:
const array = [1, 2, 3];
array.myForEach((element, index) => {
    console.log(`Element at index ${index} is ${element}`);
});
// Output:
// Element at index 0 is 1
// Element at index 1 is 2
// Element at index 2 is 3


