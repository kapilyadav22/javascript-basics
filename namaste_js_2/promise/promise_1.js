/*
A Promise in JavaScript is an object that represents the eventual completion (or failure) of
 an asynchronous operation and its resulting value.
-> They are used to handle Async operation in JS.
It acts as a placeholder for a value that will be available sometime in the future.
*/

const dataFetched = new Promise((resolve,reject)=>{
    let fetchData = false;

    if(fetchData){
        resolve("Data sent succesfully");
    }
    else {
        reject("Failed Getting Data");
    }
});


dataFetched.then((res)=> console.log(res))
.catch((err)=>{console.log(err)})
.finally(()=>console.log("Operation completed"));


/*
Promise Chaining 
Each .then() returns a new Promise, allowing chaining.

let cart = ["shoes","books"];

createOrder(cart).then(()=>{
  return proceedToPayment();
}).then(()=>{
 return  showOrderSummary();
}).then(()=>{
 return  dispatchOrder();
})

*/
/*
Promise States:
| State     | Description.                                  | Can Transition To     |
| --------- | --------------------------------------------- | --------------------- |
| pending   | Initial state; neither fulfilled nor rejected | fulfilled or rejected |
| fulfilled | Operation completed successfully              | —                     |
| rejected  | Operation failed                              | —                     |


Promise Combinators:
| Method                            | Description                                                   |
| --------------------------------- | ------------------------------------------------------------- |
| Promise.all([p1, p2, ...])        | Resolves when all promises resolve, rejects if any reject |
| Promise.allSettled([p1, p2, ...]) | Resolves when all promises settle (fulfilled or rejected)     |
| Promise.race([p1, p2, ...])       | Resolves/rejects with the first settled promise               |
| Promise.any([p1, p2, ...])        | Resolves with first fulfilled, rejects only if all fail       |


async/await is syntactic sugar over Promises — it makes asynchronous code look synchronous.

const getData =  async ()=> {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Done");
  }
}

*/