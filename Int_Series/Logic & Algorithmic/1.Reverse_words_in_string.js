function reverseWords(str) {
  return str.trim().split(/\s+/).reverse().join(' ');
}

console.log(reverseWords("  hello world this is js  ")); // "js is this world hello"


