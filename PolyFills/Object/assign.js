if (!Object.assign) {
  Object.assign = function(target, ...sources) {
    if (target == null) throw new TypeError('Cannot convert undefined or null to object');
    target = Object(target);
    for (let src of sources) {
      if (src != null) {
        for (let key in src) {
          if (Object.prototype.hasOwnProperty.call(src, key)) target[key] = src[key];
        }
      }
    }
    return target;
  };
}

// Example usage:
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

const merged = Object.assign({}, obj1, obj2, obj3);
console.log(merged); // { a: 1, b: 2, c: 3 }

