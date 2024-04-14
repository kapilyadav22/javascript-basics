let a = 10; //script
function b() {   
    var a = 100;
    console.log(a); //local a = 100
}
b();
console.log(a); //a = 10