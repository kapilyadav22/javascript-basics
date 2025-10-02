if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(cb, thisArg) {
    if (this == null) throw new TypeError('this is null or undefined');
    for (let i = 0; i < this.length; i++) {
      if (i in this && cb.call(thisArg, this[i], i, this)) return i;
    }
    return -1;
  };
}

//examples
console.log([1, 2, 3, 4].findIndex(x => x > 2));
console.log([1, 2, 3, 4].findIndex(x => x > 4));
console.log([1, 2, 3, 4].findIndex((x, i) => i === 2));
