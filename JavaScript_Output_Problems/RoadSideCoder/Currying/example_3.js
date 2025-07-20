// Evaluate(”sum”)(2)(4) ⇒ 2+4 = 6 on basis of input given to first param.
// Evaluate(subtract)(4)(2) ⇒ 4-2 = 2 on basis of input given to first param.
// Evaluate(”multiply”)(2)(4) ⇒ 2*4 = 8 on basis of input given to first param.
// Evaluate(”divide”)(2)(4) ⇒ 2/4 = 0 on basis of input given to first param.


function evaluate(operationType) {
    return function (a) {
        return function (b){
            if(operationType=="sum") return a+b;
            if(operationType=="subtract") return a-b;
            if(operationType=="multiply") return a*b;
            if(operationType=="divide") return a/b;
        }
    }
} 

const sum = evaluate("sum")(4)(2);
const sub = evaluate("subtract")(4)(2);
const mul = evaluate("multiply")(4)(2);
const div = evaluate("divide")(4)(2);

console.log(sum + " " + sub + " " + mul + " " + " " + div);
