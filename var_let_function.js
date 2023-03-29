var a = 10; //global
function b() {   
    let a = 100;
    console.log(a); //local a = 100
}
b();
console.log(a); //a = 10