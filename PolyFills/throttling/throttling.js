
const btn = document.getElementById("button_btn");
const btn_pressed =  document.getElementById("button_pressed");
const cnt = document.getElementById("triggered");

var pressedCnt = 0;
var trigger_cnt = 0;

function throttle(func, delay) {
  let last = 0;
  let result;
  return function (...args) {
    const context = this;
    const now = Date.now();

    if (now -last < delay) return result;
    last = now;
    return result = func.apply(context, args);

  }
};


const throttleCount = myThrottle(()=>{
    cnt.innerHTML = ++trigger_cnt;
},800);

//if we want to do using Lodash, copy the lodash cdn link in index.html
btn.addEventListener("click",()=>{
    btn_pressed.innerHTML = ++pressedCnt;
    throttleCount();
});


/*
The function should execute immediately on the first call
• Subsequent calls within the delay period should be ignored
• After the delay period, the next call should execute immediately
• The throttled function should always return the result of the callback function  (either new or cached)
*/