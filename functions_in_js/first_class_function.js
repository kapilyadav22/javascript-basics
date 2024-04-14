//first class function - the ability of functions to used as a values and can be passed as arguments to another functions and returned from the function, this ability is known as first class functions.

var b = function (param1, param2){
    console.log(param1,param2);
}

b(1,3);
var c = function (param1){
    console.log(param1);
}

//passing another function in arguements
c(function(){

});


//we can do it in another way

var d = function(param1){
    console.log(param1);
}
function abc(){

}

d(abc);


//anoynomous function returned from e
var e = function(){
    return function(){

    }
}
console.log(e());

//named function returned from f
var f = function(){
    return function jkl(){

    }
}
console.log(f());



