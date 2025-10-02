if (!Array.prototype.myReduceRight) {
    Array.prototype.myReduceRight = function(callback, initialValue) {
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        const arr = this;
        let accumulator;
        let startIndex;

        if (arguments.length >= 2) { // if initialValue is provided
            accumulator = initialValue;
            startIndex = arr.length - 1;
        } else { // no initialValue, use last element as accumulator
            if (arr.length === 0) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            accumulator = arr[arr.length - 1];
            startIndex = arr.length - 2;
        }

        for (let i = startIndex; i >= 0; i--) {
            if (i in arr) { // skip empty slots
                accumulator = callback(accumulator, arr[i], i, arr);
            }
        }

        return accumulator;
    };
}

// Example usage:
const array = [1, 2, 3, 4];
const sum = array.myReduceRight((acc, val) => acc + val, 0);
console.log(sum); // Output: 10 (4 + 3 + 2 + 1)