//conversion to Boolean


let isYoung = 1
console.log(typeof isYoung);    //number
valueInBoolean = Boolean(isYoung);  
console.log(valueInBoolean); //true
console.log(typeof(valueInBoolean)+"\n"); //boolean

isYoung = ""
console.log(typeof isYoung);    //string
valueInBoolean = Boolean(isYoung);  
console.log(valueInBoolean); //false
console.log(typeof(valueInBoolean)+"\n"); //boolean

isYoung = "Kapil"
console.log(typeof isYoung);    //string
valueInBoolean = Boolean(isYoung);  
console.log(valueInBoolean); //true
console.log(typeof(valueInBoolean)+"\n"); //boolean


//0 => false, 1 =>true
//"" => false, "nonemptystring" => true