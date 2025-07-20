// Debouncing ensures that a function is only executed after a specified period of inactivity following a series of rapid calls. 
// Ex: Imagine that a user clicks a button five times in the space of 100 milliseconds. That function won't be called during debouncing. 
// If the debouncing time is 2000 milliseconds after the user has ceased clicking the function will be called 2000 milliseconds later.



//Throttling 


//Create a button UI and add debounce as follows:
//  -> Show "Button Pressed <X> times" every time button is pressed
// -> Increase "Triggered <Y> Times " count after 800 ms of debounce


const btn = document.getElementById("button_btn");
const btn_pressed =  document.getElementById("button_pressed");
const cnt = document.getElementById("triggered");

var pressedCnt = 0;
var trigger_cnt = 0;

const debounceCount = _.debounce(()=>{
    cnt.innerHTML = ++trigger_cnt;
},800);

//if we want to do using Lodash, copy the lodash cdn link in index.html
btn.addEventListener("click",()=>{
    btn_pressed.innerHTML = ++pressedCnt;
    debounceCount();
});