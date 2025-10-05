
console.log("Start");

const prom = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let res = false;
        if(res) resolve("Result is true");
        else reject("Result is false");
    },2000);
})

prom.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
})
.finally(()=>console.log("Operation completed"));

console.log("End");

const promAcc = Promise.resolve("Promise is resolved");
const promRej = Promise.reject("Promise is rejected");

promAcc.then((res)=>{
    console.log(res);
}).catch((err)=>{
console.log(err);

})
