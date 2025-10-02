if (!Object.getOwnPropertyNames) {
  Object.getOwnPropertyNames = function(obj) {
    if (obj === null || obj === undefined) throw new TypeError('Cannot convert undefined or null');
    const res = [];
    for (let key in obj) res.push(key);
    return res;
  };
}

//examples
console.log(Object.getOwnPropertyNames({ a: 1, b: 2, c: 3 }));
console.log(Object.getOwnPropertyNames([1, 2, 3, 4]));
