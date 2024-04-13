const user = {
    name: "kapil",
    greet() {
        return `Hello, ${this.name}!`;
    },
    farewell: () => {
        return `GoodBye, ${this.name}!`;
    },
};

console.log(user.greet());
console.log(user.farewell());

/*
OUTPUT:
Hello, kapil!
GoodBye, undefined!

Explaination: 
this in farewell will point to global object, thats why it will return undefined.

TOPICS :  this
*/