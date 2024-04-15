//In JS Math.pi value is 3.14, can we change it??

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

/* OUTPUT 
{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
}

NOTE : We cannot change its value, because writable is set to false
  */

const kapil = {
    name: "Kapil Yadav",
    age: 26,
    isSingle: true,

    getReview() {
        console.log("He is a good person");
    }
}

console.log(Object.getOwnPropertyDescriptor(kapil, "name"));

//make name non writable and enumerable (non traversalable)
Object.defineProperty(kapil, "name", {
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(kapil, "name"));


//name enumerable is false, so name will not iterate
for (let [key, value] of Object.entries(kapil)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}

/*
OUTPUT : 
age : 26
isSingle : true


NOTE : name will not iterate
*/
