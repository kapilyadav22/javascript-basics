/*
Prototype in JavaScript
Every JavaScript function (except arrow functions) automatically has a special property called prototype.
When you use that function as a constructor (via new), the objects it creates inherit properties and methods from this prototype.

*/

/*
🔹 Prototype Chain

When you try to access a property/method on an object:
-> JS looks at the object itself.
-> If not found, it looks at the object’s prototype (__proto__).
-> This continues upwards until it reaches the root prototype (Object.prototype).
-> If still not found → undefined.
This chain of objects is called the Prototype Chain.

*/