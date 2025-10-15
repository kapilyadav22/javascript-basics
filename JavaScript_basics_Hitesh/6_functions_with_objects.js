//NOTE : Comment Other function Definitions to avoid collision

//rest operator -> combine the values
function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200,400,500)); //[200,400,500]


//if we pass val1,val2,...num1 -> val1 = 200, val2 = 400, num1 will contain rest values in array
function calculateCartPrice(val1,...num1){
    return num1;
}

console.log(calculateCartPrice(200,400,500,600,700,800,900));




//Working with Objects
const user = {
    username : "kapil",
    price : 999
}

function handleObject(obj) {
    console.log(`Username is ${obj.username?obj.username:''} and price is ${obj.price?obj.price:''}`);
}

handleObject(user)



