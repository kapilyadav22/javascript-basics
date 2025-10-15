/*
 js is a single threaded, synchronous language.
 */

//Blocking Code -> block the flow of execution , eg fetching data from server -> synchronous operation

//Non Blocking Code -> Doesn't block the flow of execution, eq. do other tasks, while data is fetching -> asynschronous operation



//Synchrounous and Asynchrounous depends on use case

//If we have dependency on fetched data, then we have to wait for it.


/*
JS Engine contains memory heap and call stack

WEB API contains dom api, fetch(),settimout, setinterval,


Callback queue -> 
Event Loop -> event loop keeps on checking if there is any task in callback queue
microtask queue -> promises and mutation observer goes inside microtask queue
*/