
const btn = document.getElementById("button_btn");
const btn_pressed =  document.getElementById("button_pressed");
const cnt = document.getElementById("triggered");

var pressedCnt = 0;
var trigger_cnt = 0;


const myDebounce = (cb, d) => {
    let timer;
    
    return function(...args) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            cb(...args);
        },d);  
    }
}

const debounceCount = myDebounce(()=>{
    cnt.innerHTML = ++trigger_cnt;
},2000);

//if we want to do using Lodash, copy the lodash cdn link in index.html
btn.addEventListener("click",()=>{
    btn_pressed.innerHTML = ++pressedCnt;
    debounceCount();
});

