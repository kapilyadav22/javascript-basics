//Throttling
//Create a button UI and add Throttling as follows:
//  -> Show "Button Pressed <X> times" every time button is pressed
// -> Increase "Triggered <Y> Times " count after 800 ms of throttle


const btn = document.getElementById("button_btn");
const btn_pressed =  document.getElementById("button_pressed");
const cnt = document.getElementById("triggered");

var pressedCnt = 0;
var trigger_cnt = 0;

const throttleCount = _.throttle(()=>{
    cnt.innerHTML = ++trigger_cnt;
},800);

//if we want to do using Lodash, copy the lodash cdn link in index.html
btn.addEventListener("click",()=>{
    btn_pressed.innerHTML = ++pressedCnt;
    throttleCount();
});