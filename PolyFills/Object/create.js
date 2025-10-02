if (!Object.create) {
    Object.create = function(proto) {
        if (proto === null) {
        return {}; 
    }
        if (typeof proto !== 'object' && typeof proto !== 'function') {
            throw new TypeError('Object prototype may only be an Object or null');
        }

        function F() {}
        F.prototype = proto;
        return new F();
    };
}


// Usage
const parent = { greet() { console.log("Hello"); } };
const child = Object.create(parent);

child.greet(); // Hello
console.log(Object.getPrototypeOf(child) === parent); // true

// Example usage:
const anotherChild = Object.create({ x: 10, y: 20 });
console.log(anotherChild.x);
console.log(anotherChild.y);
console.log(Object.getPrototypeOf(anotherChild)); // { x: 10, y: 20 }


/*
How it works:
We define an empty constructor function F.
Assign its prototype to the proto we want.
Create a new instance of F. The new object’s prototype is now proto.
This mimics what Object.create does.
*/