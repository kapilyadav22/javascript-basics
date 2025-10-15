// Find the first non-repeating character in a string

// Brute Force: TC : O(n2), SC:O(1)

function firstNonRepeatingChar(str){

for(let i=0;i<str.length;i++){
    let isUnique = true;
    for(let j=0;j<str.length;j++){
        if(i!==j && str[j]===str[i]){
            isUnique=false;
            break;
        }
    }
    
    if(isUnique) {
        return str[i];
    }
  
}
  return null;
}

console.log(firstNonRepeatingChar("swiss")); // "w"
console.log(firstNonRepeatingChar("aabbcc")); // null


//Optimal : TC : O(n), SC:O(n)
function firstNonRepeatingChar(str){
    
    let freq = {};
    for(let ele of str){
        freq[ele] = (freq[ele] || 0) +1;
    }
    
    for(let ele of str){
        if(freq[ele]===1) return ele;
    }
  
  return null;
}


//taking map:
function firstNonRepeatingChar(str){
    
    let freq = new Map();
    for(let ele of str){
        freq.set(ele,(freq.get(ele)||0)+1);
    }
    
    for(let ele of str){
        if(freq.get(ele)===1) return ele;
    }
  
  return null;
}

/*
Other Map Methods:
map.has(key)
map.delete(key);
map.clear() : clear the map

const userAges = new Map([ ['Alice', 25], ['Bob', 30] ]);
console.log(userAges.size); // 2

userAges.keys() : Returns an iterator for all keys.
userAges.values(): Returns an iterator for all values.

userAges.entries() : Returns an iterator of [key, value] pairs (like Object.entries()).
or simply : for (let [k, v] of userAges) console.log(k, v);


*/
