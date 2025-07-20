// Infinite Currying

function add(a){
    return function (b){
        if(b) return add(a+b);
        return a;
    };
}
let sum = add(2)(4)(5)(6)();
console.log(sum);
