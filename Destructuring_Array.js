// let a=[2,4,5,6]
// let [b,c]=a;
// console.log(b,c);
// let [x,y,...rest]=a
// console.log(x,y,rest);

//destructring for an object 
// const list={a:12,b:34}
// const {a,b} = list
// console.log(a,b);


// spread operator
// let arr1 = [2,4,5];
// let list1={...arr1}
// console.log(list1);

// function sum(v1,v2,v3) {
//     return v1+v2+v3;
// }
// console.log(sum(...arr1))

let object= {
    name:"Pranil",
    company:"BJS College",
    salary:50000
}

console.log({...object,name:"Takawane",salary:90000}); // this time the values wwill be changed and object willl printout
console.log({name:"Takawane",salary:90000,...object}); // this time the values wwill be not changed and object willl printout