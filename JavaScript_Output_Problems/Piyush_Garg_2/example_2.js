function a() {
    console.log("A");
}

setTimeout(() => {
    console.log("B");
}, 0);

a();

console.log("C");

Promise.resolve().then(() => console.log("D"));

/*
OUTPUT:
A
C
D
B

for Promises, we have one more queue - micro task queue.
So promises will go inside micro task queue.
and settimeout code will go inside task Queue/ callback queue.

Micro Task Queue has High Priority, so event loop will pick the promise code first.
then it will pick data from callback queue/ task queue.


Topic Covered : Promises, MicroTask Queue, Callback Queue, Event Loop
*/