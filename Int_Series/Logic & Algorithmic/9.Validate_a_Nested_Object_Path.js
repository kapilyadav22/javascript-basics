// Validate a Nested Object Path

function hasPath(obj, path) {
  return path.split('.').reduce((acc, key) => {
    if (acc && key in acc) return acc[key];
    return undefined;
  }, obj) !== undefined;
}

//Example
const data = { a: { b: { c: 42 } } };
console.log(hasPath(data, 'a.b.c')); // true
console.log(hasPath(data, 'a.b.x')); // false
