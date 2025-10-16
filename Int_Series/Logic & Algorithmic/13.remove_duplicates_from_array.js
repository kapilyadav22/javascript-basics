function removeDuplicates(arr) {
  let result = [];
  let n = arr.length;
  let set = new Set();

  for (const ele of arr) {
    if (!set.has(ele)) {
      result.push(ele);
      set.add(ele);
    }
  }
  return result;
}

removeDuplicates([1, 2, 2, 3, 4, 4])
