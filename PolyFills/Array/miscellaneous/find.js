if (!Array.prototype.find) {
  Array.prototype.find = function(cb, thisArg) {
    if (this == null) throw new TypeError('this is null or undefined');
    for (let i = 0; i < this.length; i++) {
      if (i in this && cb.call(thisArg, this[i], i, this)) return this[i];
    }
    return undefined;
  };
}

//examples
console.log([1, 2, 3, 4].find(x => x > 2));
console.log([1, 2, 3, 4].find(x => x > 4));
console.log([1, 2, 3, 4].find((x, i) => i === 2));
