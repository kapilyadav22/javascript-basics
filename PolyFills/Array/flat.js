if (!Array.prototype.flat) {
  Array.prototype.flat = function(depth = 1) {
    const res = [];
    (function flat(arr, d) {
      for (let item of arr) {
        if (Array.isArray(item) && d > 0) flat(item, d - 1);
        else res.push(item);
      }
    })(this, depth);
    return res;
  };
}

//example
console.log([1, 2, [3, 4, [5]]].flat()); // [1, 2, 3, 4, [5]]
console.log([1, 2, [3, 4, [5]]].flat(2)); // [1, 2, 3, 4, 5]
