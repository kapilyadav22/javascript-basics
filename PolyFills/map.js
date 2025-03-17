Array.prototype.myMap = function(cb) {
    let temp = [];

    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this));
    }
    return temp;
};

const nums = [1,2,3,4,5];
// const multiply = nums.myMap((ele, i, arr)=> { return ele * 3});
const multiply = nums.myMap(ele => ele * 2);

console.log(multiply);