if (!Object.is) {
  Object.is = function(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y; // handles +0 and -0
    }
    return x !== x && y !== y; // handles NaN
  };
}


//examples
console.log(Object.is(25, 25));
console.log(Object.is('foo', 'foo'));
console.log(Object.is(null, null));
console.log(Object.is(0, -0));