Array.prototype.myFilter = function(cb){
    let temp = [];
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            temp.push(this[i]);
        }
    }
    return temp;
}

const nums = [1,2,3,4,5];
// const multiply = nums.myMap((ele, i, arr)=> { return ele * 3});
const isEven = nums.myFilter(ele => ele % 2==0);

console.log(isEven);
