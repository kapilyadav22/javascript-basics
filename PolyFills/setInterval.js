// Implement setInterval using setTimeout

function mySetInterval(callback, delay, ...args) {
    let timerId = { id: null }; // object so we can reference it outside

    function tick() {
        callback(...args);         
        timerId.id = setTimeout(tick, delay); 
    }

    timerId.id = setTimeout(tick, delay);   
    return timerId;                       
}

function myClearInterval(timer) {
    clearTimeout(timer.id);
}

let count = 0;
const interval = mySetInterval(() => {
    console.log("Tick", ++count);
    if (count === 5) myClearInterval(interval); 
}, 1000);


/*
How it works:
The tick function calls the callback and then schedules itself again using setTimeout.
Returning an object with id allows us to stop the interval using a custom myClearInterval.
Using setTimeout recursively avoids overlapping calls if the callback execution time is longer than the interval.
*/