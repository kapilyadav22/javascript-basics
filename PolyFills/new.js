function myNew(Constructor, ...args) {
    // 1️⃣ Create a new empty object
    const obj = {};

    // 2️⃣ Set the prototype
    Object.setPrototypeOf(obj, Constructor.prototype);

    // 3️⃣ Call the constructor with 'this' pointing to the new object
    const result = Constructor.apply(obj, args);

    // 4️⃣ Return object if constructor returns object, else new object
    return (result && (typeof result === 'object' || typeof result === 'function')) ? result : obj;
}



function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

const p1 = myNew(Person, "John", 25);

console.log(p1.name); // John
console.log(p1.age);  // 25
p1.sayHi();            // Hi, I'm John
console.log(Object.getPrototypeOf(p1) === Person.prototype); // true

