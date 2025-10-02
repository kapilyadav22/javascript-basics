if (!Array.prototype.every) {
  Array.prototype.every = function(cb, thisArg) {
    if (this == null) throw new TypeError('this is null or undefined');
    for (let i = 0; i < this.length; i++) {
      if (i in this && !cb.call(thisArg, this[i], i, this)) return false;
    }
    return true;
  };
}

//examples
console.log([1, 2, 3, 4].every(x => x < 5));
console.log([1, 2, 3, 4].every(x => x < 4));
