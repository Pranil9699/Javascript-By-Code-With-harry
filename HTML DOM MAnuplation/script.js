"use strict";

// video 44
// first.insertAdjacentHTML('beforebegin','<h1>beforebegin56</h1>');
// document.getElementById('first').insertAdjacentHTML('afterbegin','<h1>afterbegin</h1>');
// document.getElementById('first').insertAdjacentHTML('beforeend','<h1>beforeend</h1>');
// document.getElementById('first').insertAdjacentHTML('afterend','<h1>afterend</h1>');

// video 45
// console.log(second.classList);

// setTimeout(() => {
//   setTimeout(() => {
//     setTimeout(() => {
//       second.classList.toggle("second-text");
//     }, 3000);
//     second.classList.remove("second-text");
//   }, 3000);
//   second.classList.remove("second");
// }, 3000);

// video 46 setInterval And SetTimeout in js

// const sum=(a,b)=>{
//   document.write("Sum is Done"+(a+b));
// }
// let id=setTimeout(sum,2000,34,56);   // syntax setTimeout(functionName,SetTime,arg1,argn); // it return the TimerId
// clearTimeout(id)

// const divide=(a,b)=>{
//   document.write("Divide is Done "+(a/b));
// }
// setInterval(divide,5000,50,10);

// video 47 Event In Browser

// mouse Event

// key event 0;

function OnMouseOver(a) {
  document.write("Come");
  document.write("Done");
}

// video 48 Handling The Browser Event , evenet Licners

// let a = document.getElementById("btn");
// a.addEventListener("click",function (e) {
//   alert("Hello World 1");
// });
// a.addEventListener("click",function(e){
//   alert("Hello World 2");
// })

// so we wann remove the event listener one that

//  a.onclick= function (e) {
//   alert(e.target+" "+e.type+" "+e.clientX+" "+e.clientY)
//   alert("Hello World 1");
// };
// let y = function (e) {
//   alert("Hello World 2");
// };
// let check = prompt("Enter your Choice ?1/2");
// if (check == 1) {
//   a.addEventListener("click", x);
//   a.removeEventListener("click", y);
// } else if (check == 2) {
//   a.removeEventListener("click", x);
//   a.addEventListener("click", y);
// }

//video 49 add event linser for differett purposes

// document.getElementById("facebook").onclick = function (e) {
//   window.location = "https://www.facebook.com";
// };

// const fetchweb = async (url) => {
//   let con = await fetch(url);
//   let a = await con.json();
//   return a;
// };
// setInterval(async function () {
//   let url = "https://jsonplaceholder.typicode.com/todos/1";
//   console.log(await fetchweb(url));
// }, 3000);
setInterval(() => {
  const bulb = document.getElementById("bulb");
  bulb.classList.toggle("shine");
  bulb.style.borderRadius = "50%";
  bulb.style.color = "red";

  const fElement = document.getElementById("f");
  const sElement = document.getElementById("s");

  fElement.innerHTML =
    new Date().getHours() +
    " " +
    new Date().getMinutes() +
    " " +
    new Date().getSeconds(); // Manipulate the "f" element
  sElement.innerHTML = "goodbye"; // Manipulate the "s" element
}, 300);
