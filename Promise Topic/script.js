let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Set p1 Time out First Done...");
      resolve(true);
    }, 5000);
  });
  
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Set p2 Time out first reject...");
      reject(new Error("There is Bug..."));
    }, 5000);
  });
// console.log(p1,p2);
p1.then((value)=>{
    console.log("The Promise of P1 Is :"+value);
}).catch((error)=>{
    console.log(error);
})
// p2.then((value)=>{
//     console.log("The Promise of P2 Is :"+value);
// }).catch((error)=>{
//     console.log(error);
// })
p2.then((value)=>{
    console.log("The Promise of P2 Is :"+value);
},(error)=>{
    console.log(error);
})
// p1.then((resolve) => {
//   console.log(resolve);
// }).catch((error) => {
//   console.log(error);
// });
// p2.then((resolve) => {
//   console.log(resolve);
// }).catch((reject) => {
//   console.log(reject);
// });
