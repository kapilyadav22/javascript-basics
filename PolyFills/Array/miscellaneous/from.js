if (!Array.from) {
  Array.from = function(arrayLike, mapFn, thisArg) {
    if (arrayLike == null) throw new TypeError('Cannot convert undefined or null to object');
    const res = [];
    for (let i = 0; i < arrayLike.length; i++) {
      res.push(mapFn ? mapFn.call(thisArg, arrayLike[i], i) : arrayLike[i]);
    }
    return res;
  };
}

// Example usage:   
const str = 'hello';
const arr = Array.from(str);
console.log(arr); // ['h', 'e', 'l', 'l', 'o']

const set = new Set([1, 2, 3]);
const arrFromSet = Array.from(set);
console.log(arrFromSet); // [1, 2, 3]

const mappedArr = Array.from([1, 2, 3], x => x * 2);
console.log(mappedArr); // [2, 4, 6]       

// Note: This is a basic polyfill and may not cover all edge cases of the actual Array.from method.
