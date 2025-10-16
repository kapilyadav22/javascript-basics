function isPowerOfThree(n) {
  if (n <= 0) return false;

  const res = Math.log10(n) / Math.log10(3);
  return Number.isInteger(res);
   
}

