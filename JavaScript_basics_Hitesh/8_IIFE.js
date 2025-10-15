//My Medium Article - https://kapilyadav22.medium.com/javascript-immediately-invoked-function-expressions-iifes-in-detail-with-quiz-914ae40a33e4


//An Immediately Invoked Function Expression (IIFE), pronounced as “iffy,” refers to a function that is executed right after it’s declared.


(function kapil(username){
console.log(username);
})("kapil");

//separate iife with semicolon;, other wise it will give error if you use another iife,


//below code will give error, because it doesn't know where to end IIFE.
//you can take function, arrow function, function expression
(function f1(username){
    console.log(username);
    })("kapil") 

(function f2(username){
    console.log(username);
})("kapil")