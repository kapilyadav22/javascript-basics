function flattenIterative(arr) {
  const result = [];
  const stack = [...arr];

  while (stack.length) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      result.push(item);
    }
  }

  return result.reverse();
}

const nested2 = [1, [2, [3, 4], 5], 6];
console.log(flattenIterative(nested2)); // [1, 2, 3, 4, 5, 6]


//another way without reverse
function flattenArray(arr) {
  let stack = [...arr];
  let result = [];
  while (stack.length) {
    let next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.unshift(next);
    }
  }
  return result;
}
