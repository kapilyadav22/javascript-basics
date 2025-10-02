if (!Object.freeze) {
  Object.freeze = function(obj) {
    return obj; // Cannot fully polyfill deep immutability, but can return object itself
  };
}

// Example usage:
const obj = { a: 1, b: { c: 2 } };
const frozenObj = Object.freeze(obj);
frozenObj.a = 10; // This will not change 'a' in strict mode
frozenObj.b.c = 20; // This will change 'c' because freeze is shallow
console.log(frozenObj); // { a: 1, b: { c: 20 } }
