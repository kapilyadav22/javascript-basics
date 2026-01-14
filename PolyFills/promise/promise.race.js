Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    // If empty array, the race will never settle (same as native Promise.race)
    if (!Array.isArray(promises)) {
      throw new TypeError("Argument must be iterable");
    }

    for (let p of promises) {
      Promise.resolve(p)
        .then(resolve)  
        .catch(reject); 
    }
  });
};
