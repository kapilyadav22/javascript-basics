let myHeroes = ['thor','spiderman']

let heroPower = {
    thor: "hammer",
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.kapil = function(){
    console.log(`kapil is present in all objects`);
}
heroPower.kapil();

//we can use kapil for array as well, because at the end everything is object
//first array will try to find kapil on it, then it will go to its parent (object) and access kapil
myHeroes.kapil();


Array.prototype.kapil2 = function(){
    console.log(`kapil2 is present in all objects`);
}

myHeroes.kapil2(); //kapil2 is present in all objects`

//Array doesn't share its power to Object
heroPower.kapil2(); //will give an error heroPower.kapil2 is not a function

