const kapil = {
    name: "kapil Yadav",
    sayName: function() {
        console.log(this.name);
    },
};

setTimeout(kapil.sayName,2*1000);
setTimeout(kapil.sayName.bind(kapil),2*1000);

/*
const newFun = kapil.sayName.bind(kapil);
setTimeout(newFun, 2000);
*/

/*  
OUTPUT:
undefined
kapil yadav


bind() -> will bind the context to sayName, and returns a function, which
then will be called in setTimeout

bind() vs call() 
*/