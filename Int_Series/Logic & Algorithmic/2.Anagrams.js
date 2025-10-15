//Anagrams


// g means all occurences of given pattern
//\W means non alphabetical : Anything NOT a–z, A–Z, 0–9, or _
//\w means alphabetical characters
function isAnagram(str1, str2) {
  const normalize = s => s.replace(/\W/g, '').toLowerCase().split('').sort().join('');
  return normalize(str1) === normalize(str2);
}

console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world'));   // false

