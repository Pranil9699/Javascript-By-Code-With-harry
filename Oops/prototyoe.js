let a = {
  fname: "Pranil",
  language: "Javascript",
//   run: () => {
//     console.log("self run");
//   },
};
console.log(a);

let p = {
    run: ()=>{
        console.log("run");
    }
}
p.__proto__={
    lname:"takawane",
}
a.__proto__=p
// console.log(a);
// console.log(a.lname);
// a.run()

