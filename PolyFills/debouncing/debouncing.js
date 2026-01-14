
const btn = document.getElementById("button_btn");
const btn_pressed =  document.getElementById("button_pressed");
const cnt = document.getElementById("triggered");

var pressedCnt = 0;
var trigger_cnt = 0;


const myDebounce = (cb, d) => {
    let timer;
    return function(...args) {
        const context = this;     
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb.apply(context, args);
        }, d);
    };
};


const debounceCount = myDebounce(()=>{
    cnt.innerHTML = ++trigger_cnt;
},2000);

//if we want to do using Lodash, copy the lodash cdn link in index.html
btn.addEventListener("click",()=>{
    btn_pressed.innerHTML = ++pressedCnt;
    debounceCount();
});




const searchBox = {
    query: "",
    setQuery(q) {
        this.query = q;
        console.log("Search query updated to:", this.query);
    }
};

const inputHandler = myDebounce(searchBox.setQuery, 1000);

// Simulating typing "car"
inputHandler.call(searchBox, "c");
inputHandler.call(searchBox, "ca");
inputHandler.call(searchBox, "car");


//Debounc example with context

const user = {
    name: "Kapil",
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
};

const debouncedGreet = myDebounce(user.greet, 1500);

// Simulating multiple calls to greet
debouncedGreet.call(user);
debouncedGreet.call(user);
debouncedGreet.call(user);


//or
function say(age) {
    console.log("Hello",this.name + ", your age is " + age);
  }

const obj = {
  name: "Kapil",
};

console.log(new Date().toLocaleTimeString());
obj.debounced = myDebounce(say, 1500);
obj.debounced(28); 

