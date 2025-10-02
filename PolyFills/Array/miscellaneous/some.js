if (!Array.prototype.some) {
  Array.prototype.some = function(cb, thisArg) {
    if (this == null) throw new TypeError('this is null or undefined');
    for (let i = 0; i < this.length; i++) {
      if (i in this && cb.call(thisArg, this[i], i, this)) return true;
    }
    return false;
  };
}

//examples
console.log([1, 2, 3, 4].some(x => x > 3)); // true
console.log([1, 2, 3, 4].some(x => x > 4)); // false

