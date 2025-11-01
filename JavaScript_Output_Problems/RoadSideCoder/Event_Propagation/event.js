//Event propagation in js

/*

Event Bubbling : 
Event bubbling is when an event propagates from the target element up to the root of the DOM,
 
Event Capturing : while capturing is when an event propagates from the root down to the target element.

*/


//by default its value is false, means bubbling happens
//if true, means capturing


//event.target vs this.target vs event.currentTarget


const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

// button.addEventListener("click",()=>{
//     alert("button clicked")
// },true);

// div.addEventListener("click",()=>{
//     alert("div clicked")
// },true);

// form.addEventListener("click",()=>{
//     alert("form clicked")
// },true);


button.addEventListener("click",func);
div.addEventListener("click",func);
form.addEventListener("click",func);

function func(){
    //event.target will point to the target, in our case button (follows bubbling)
    //this will only point to function in which it is called on
    alert("Current target is : "+ event.currentTarget.tagName + "target : " + event.target.tagName);
}

//stop bubbling and capturing
//e.stopPropagation()
// /e.stopImmediatePropagation()


/*
Event delegation
Event delegation is a JavaScript technique that improves performance by attaching a single event listener 
to a parent element instead of multiple listeners to child elements.


const parentList = document.querySelector("products");
  parentList.addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'SPAN') {
      alert(`You clicked on: ${event.target.textContent}`);
    }
  });

  e.preventDefault() -> to stop the default behavior, anchor tags, forms, contextmenu, keydown, dragover etc.

  not applicable on : click on div, mouseover, mouseenter, 
  mousemove, 
  input on custom element (no form behavior)
  Custom JS events (new Event('custom'))

   */



