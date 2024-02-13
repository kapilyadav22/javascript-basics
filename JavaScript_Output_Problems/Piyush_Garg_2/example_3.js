async function getData() {
    // console.log("");
    return 1;
}

console.log("A");
console.log("B");

setTimeout(() => {
    console.log("C");
}, 0);

getData().then(() => console.log("I got the Data"));

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
Promises are also part of browser.
So promises will also register on browser.
for Promises, we have one more queue - micro task queue.
So promises will go inside micro task queue.
and settimeout code will go inside task Queue/ callback queue.

Micro Task Queue has High Priority, so event loop will pick the promise code first.
then it will pick data from callback queue/ task queue.


Topic Covered : Promises, MicroTask Queue, Callback Queue, Event Loop


*/