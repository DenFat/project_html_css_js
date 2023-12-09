'use strict';

const box = document.getElementById("box");


box.style.cssText = "background-color: blue; width: 300px";

const btns = document.getElementsByTagName("button");
btns[1].style.borderRadius = "100%";

const circles = document.getElementsByClassName("circle");
circles[0].style.backgroundColor = "red";

for(let i = 0; i < circles.length; i++){
    circles[i].style.backgroundColor = "red";
}
const hearts = document.querySelectorAll(".heart");

hearts.forEach(item =>{
    item.style.backgroundColor = "black";
});

const div = document.createElement("div");
//const text = document.createTextNode("Тут был я");

div.classList.add("black");

// document.querySelector(".wrapper").append(div);
const wrapper = document.querySelector(".wrapper");
// wrapper.prepend(div);

// hearts[0].before(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[1]);
wrapper.append(div);

div.innerHTML = "<h1>Hello world</h1>";
// div.textContent = "Hello";
div.insertAdjacentHTML("beforebegin","<h2>Hello</h2>");