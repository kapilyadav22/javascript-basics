/*
Promise object represents the eventual completion (or failure) of 
an asynchronous operation and its resulting value

A Promise is in one of these states:
-> pending: initial state, neither fulfilled nor rejected.
-> fulfilled: meaning that the operation was completed successfully.
-> rejected: meaning that the operation failed.
*/


//create a promise
const promiseOne = new Promise(function (resolve, reject) {
    //do an sync task
    //db calls, network
    setTimeout(function () {
        console.log('Async Task is Completed');
        //when calling resolve, it will connect to .then()
        resolve();
    }, 1000);
});


//use the promise 
promiseOne.then(function () {
    //do tasks after completing the promise
    console.log("Promise consumed");
})


//Example-2 : without using variable
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Task 2");
        resolve();
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})


//Example - 3 : Pass data in resolve
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Kapil Yadav", email: "kapily@gmail.com" });
    }, 1000);
})

//Whatever data we pass in resolve, we can get it in .then()
promiseThree.then(function (user) {
    console.log(user); //{ username: 'Kapil Yadav', email: 'kapily@gmail.com' }
})


//Example-4 : 
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "kapil", password: "123" })
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
})

//chaining
//first then will have the resolve result
//second then will have the value, returned by first then
//catch is to handle the errors if any
promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("The promise is either resolved/ reject successfully");
    })


//Example5 - Using Async Await
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Hey_JavaScript", password: "123" })
        } else {
            reject('ERROR: Hey_JavaScript went wrong');
        }
    }, 1000);
})

const consumePromiseFive = async () => {
    //promiseFive is an Object
    try {
        const apiResponse = await promiseFive;
        console.log(apiResponse);
    }
    catch (err) {
        console.log("The Error is ", err);
    }
}

consumePromiseFive();


//Using Fetch
const getAllUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}

getAllUsers();

//using .then()
fetch('https://jsonplaceholder.typicode.com/users')
.then((user) => user.json())
.then((userDetails) => console.log(userDetails))
.catch((err) => console.log(err))
