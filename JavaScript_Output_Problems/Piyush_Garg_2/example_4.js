console.log("A");
console.log("B");

setTimeout(() => {
    console.log("C");
}, 5000);

fetch('https://www.google.com').then(() => console.log("I got the Data"));

console.log("D");
console.log("E");
console.log("F");

/*
OUTPUT:
A
B
D
E
F
I got the Data
C

Explaination: 
fetch is also part of browser.once fetch api will fetch the data, it wii
go into micro task queue.

Micro Task Queue has High Priority, so event loop will pick the fetch code first.
then it will pick data from callback queue/ task queue settimeout data.


Topic Covered : Promises, MicroTask Queue, Callback Queue, Event Loop


*/