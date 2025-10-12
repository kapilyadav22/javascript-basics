//arr.reduce((acc,curr,in,arr)={},initialValue)


Array.prototype.myReduce = function(cb,initialValue) {
    var accumulator=initialValue;
    for(let i=0;i<this.length;i++){
        accumulator=accumulator?cb(accumulator,this[i],i,this):this[i];
    }
    return accumulator;
}

/*
There are multiple issues with this method,
When initialValue is falsy but valid (like 0, '', or false), it will give wrong output in some cases like:
const arr = [10, 20, 30];
const res2 = arr.myReduce((a, b) => a || b, 0);
console.log(res2); // ❌ expected 10 but gets 20
*/


//corrected Code
Array.prototype.myReduce = function (callback, initialValue) {
    if (this == null) throw new TypeError("called on null or undefined");
    if (typeof callback !== "function") throw new TypeError(callback + " is not a function");

    const arr = Object(this);
    const len = arr.length >>> 0; // ensure length is a 32-bit unsigned integer
    let acc;
    let i = 0;

    // Check if initialValue was provided
    if (arguments.length >= 2) {
        acc = initialValue;
    } else {
        // Find first defined value
        while (i < len && !(i in arr)) i++;
        if (i >= len)
            throw new TypeError("Reduce of empty array with no initial value");
        acc = arr[i++];
    }

    for (; i < len; i++) {
        if (i in arr) acc = callback(acc, arr[i], i, arr);
    }

    return acc;
}



//Example 
const nums = [1,2,3,4,5];
const sum = nums.myReduce((acc,curr,ind,nums)=> {
   return acc+=curr;
},10);

console.log(sum);


