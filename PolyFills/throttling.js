
const btn = document.getElementById("button_btn");
const btn_pressed =  document.getElementById("button_pressed");
const cnt = document.getElementById("triggered");

var pressedCnt = 0;
var trigger_cnt = 0;

const myThrottle = (cb,d) => {
    let last=0;
    
    return function(...args) {
        let now = new Date().getTime();
        
        if(now-last < d) return;
        last = now;

        return cb(...args);
    };
};

const throttleCount = myThrottle(()=>{
    cnt.innerHTML = ++trigger_cnt;
},800);

//if we want to do using Lodash, copy the lodash cdn link in index.html
btn.addEventListener("click",()=>{
    btn_pressed.innerHTML = ++pressedCnt;
    throttleCount();
});