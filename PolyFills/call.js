//Polyfill for Call

let car1 = {
    color: "red",
    company : "Audi",
};

function purchaseCar(currency, price){
    console.log(`I Have ${this.color} -  ${this.company} car for ${currency} ${price}`); 
}


//polyfill for call

Function.prototype.myCall = function(context={}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + "It's not callable");
    }

    context.fn = this;
    context.fn(...args);
};

Function.prototype.myApply = function(context={}, args = []){
    if(typeof this !== 'function'){
        throw new Error(this + "It's not callable");
    }

    if(!Array.isArray(args)){
        throw new TypeError("CreateListFromArrayLike called on non-object");
    }

    context.fn = this;
    context.fn(...args);
};



purchaseCar.myCall(car1,'$', 50000000);
purchaseCar.myApply(car1,['$', 500000]);