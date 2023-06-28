// DOM - DOCUMENT OBJECT MODEL : The interaction or manipulation
// of a web browser using JavaSript.
document.write(" This is the first DOM script");
document.write("<h1> Let's  Begin</h1>");

// CSS USING JS
document.body.style.backgroundColor = "red";
document.body.style.color ="white"
document.body.style.fontSize ="2rem";
document.body.style.fontFamily ="cursive";

// selecting elements using javascript
let button1 = document.querySelector(".click");
let button2 = document.querySelector(".unclick");
let title =document.querySelector("h1");

button1.style.backgroundColor ="green";
button1.style.color ="white";
button1.style.fontSize ="2rem";
button1.style.padding = "1rem";


button2.style.backgroundColor ="blue";
button2.style.color ="white";
button2.style.fontSize="2rem";
button2.style.padding ="1rem";
button2.style.border ="2px solid black"

//event listeners-- method used to create interactivity/user actions
// to the web developer
//---event listeners include
//click
//mouseover
//mouseout
//scroll
//submit

button1.addEventListener("click",function(){
    document.body.style.backgroundColor="green";
    document.body.style.fontFamily="cursive";
    document.body.append("button 1 was clicked");
})
button2.addEventListener("click",function(){
    document.body.style.backgroundColor="blue";
    document.body.style.fontFamily="helvetica";
    document.body.append("Button 2 was clicked just now");
})

// working with inputs

const input = document.querySelector("input");
const button3 = document.querySelector(".button3");
button3.addEventListener("click", function(){
 document.body.prepend(input.value);
 document.
})