

let car2 = {
    color: "red",
    company : "Audi",
};

function purchaseCar(currency, price){
    console.log(`I Have ${this.color} -  ${this.company} car for ${currency} ${price}`); 
}


// const newFunc = purchaseCar.bind(car2,"$",50000);
// console.log(newFunc());

//we can provide args above or below in newFunc itself
const newFunc2 = purchaseCar.bind(car2);
console.log(newFunc2);

console.log(newFunc2("$",50000));



Function.prototype.myBind = function(context={}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + "It's not callable");
    }

    context.fn = this;
    return function(...newArgs){
        return context.fn(...args,...newArgs);
    };
};


const newFunc3 = purchaseCar.myBind(car2);
console.log(newFunc3);
console.log(newFunc3("$",20000));



