// Merge Two Sorted Arrays

function mergeSortedArrays(a, b) {
  let i = 0, j = 0;
  const res = [];

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) res.push(a[i++]);
    else res.push(b[j++]);
  }

  return [...res, ...a.slice(i), ...b.slice(j)];
}

// Example
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1,2,3,4,5,6]
