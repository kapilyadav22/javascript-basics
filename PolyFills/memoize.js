//memoize function

function myMemoize(fn,context){
    let cache={};
    return function(...args){
        var argscache=JSON.stringify(args);
          if (!cache.hasOwnProperty(argscache)) {
            cache[argscache]=fn.call(context || this,...args);
            // cache[argscache] = fn.apply(context || this, args);
        }
        return cache[argscache];
}
};

function calTime(num1,num2){
    for(let i=0;i<100000000;i++){};
    return num1+num2;
}


const memoizedCalTime = myMemoize(calTime);

console.time("First Call");
memoizedCalTime(10, 11);
console.timeEnd("First Call");

console.time("Second Call");
memoizedCalTime(10, 11);
console.timeEnd("Second Call");

