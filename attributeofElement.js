let i = document.getElementById('Love')
console.log(document.querySelector('#Love').setAttribute("class","sexy"))
// console.log(document.querySelector('#Love').removeAttribute("class","BreakUp"))
console.log(document.querySelector('.sexy').hasAttribute("class"));
console.log(document.querySelector('.sexy').attributes);
console.log(document.querySelector('.sexy').insertAdjacentText("afterbegin","Ilove Sex with Gays<br>"));
console.log(document.getElementsByClassName('PatchUp').dataset.attributes);