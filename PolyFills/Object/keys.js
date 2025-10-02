if (!Object.keys) {
  Object.keys = function(obj) {
    if (obj === null || obj === undefined) throw new TypeError('Cannot convert undefined or null to object');
    const res = [];
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
    }
    return res;
  };
}

// Example usage:
const exampleObj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(exampleObj);
console.log(keys); // ['a', 'b', 'c']
