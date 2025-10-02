//arr.reduce((acc,curr,in,arr)={},initialValue)

Array.prototype.myReduce = function(cb,initialValue) {
    var accumulator=initialValue;

    for(let i=0;i<this.length;i++){
        accumulator=accumulator?cb(accumulator,this[i],i,this):this[i];
    }
    return accumulator;
}

const nums = [1,2,3,4,5];
const sum = nums.myReduce((acc,curr,ind,nums)=> {
   return acc+=curr;
},10);

console.log(sum);