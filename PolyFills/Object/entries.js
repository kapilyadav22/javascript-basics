if (!Object.entries) {
  Object.entries = function(obj) {
    if (obj === null || obj === undefined) throw new TypeError('Cannot convert undefined or null to object');
    const res = [];
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) res.push([key, obj[key]]);
    }
    return res;
  };
}

// Example usage:
const exampleObj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(exampleObj);
console.log(entries); // [['a', 1], ['b', 2], ['c', 3]]
