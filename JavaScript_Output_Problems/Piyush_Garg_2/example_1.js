console.log("A");
console.log("B");

setTimeout(() => {
    console.log("C");
}, 0);


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
C

Explaination: 
setTimeout, setInterval, fetch, all are part of browser, not js
so, browser take care of settimeout, and pushes the code inside settimeout in 
task Queue/ Callback Queue after the interval.
Call Stack waits for None. It executes the code as soon as, the code entered in it.
Event Loop is responsible for putting the tasks from task Queue in Call Stack 
(that too when Call Stack is empty)

Even though settimeout sets to 0 milisecond, it will not execute because of event loop.

Topic Covered : Promises, MicroTask Queue, Callback Queue, Event Loop
*/