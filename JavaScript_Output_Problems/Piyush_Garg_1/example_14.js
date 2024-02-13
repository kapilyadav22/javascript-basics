const obj = Object.create({
    //it will add the height property in prototype
    height: 30,
});

console.log(obj.height);

//obj doesnt have height, and obj.prototype have and delete doesnt work on prototype
delete obj.height;

console.log(obj.height);


/*
OUTPUT:
30
30
*/