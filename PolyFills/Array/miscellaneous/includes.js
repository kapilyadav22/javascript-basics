if (!Array.prototype.includes) {
  Array.prototype.includes = function(valueToFind, fromIndex = 0) {
    if (this == null) throw new TypeError('"this" is null or undefined');
    const len = this.length;
    let start = Math.max(fromIndex >= 0 ? fromIndex : len + fromIndex, 0);
    for (let i = start; i < len; i++) {
      if (this[i] === valueToFind || (Number.isNaN(this[i]) && Number.isNaN(valueToFind))) return true;
    }
    return false;
  };
}

// Example usage:
const arr = [1, 2, 3, NaN];
console.log(arr.includes(2)); // true
console.log(arr.includes(NaN)); // true
console.log(arr.includes(4)); // false

// Note: This polyfill does not handle all edge cases and is a simplified version of the actual Array.prototype.includes method.