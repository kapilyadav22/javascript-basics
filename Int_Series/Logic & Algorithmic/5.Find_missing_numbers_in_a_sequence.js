// Find missing numbers in a sequence

function findMissingNumbers(arr) {
  const missing = [];
  const set = new Set(arr);
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  for (let i = min; i <= max; i++) {
    if (!set.has(i)) missing.push(i);
  }
  return missing;
}

// Example
console.log(findMissingNumbers([1, 2, 4, 6, 7, 9])); // [3, 5, 8]
