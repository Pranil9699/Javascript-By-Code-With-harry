// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("P1 Done");
//     reject(true);
//   }, 1000);
// });
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("P2 Done");
//     reject(false);
//   }, 2000);
// });
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("P3 Done");
//     resolve(true);
//   }, 3000);
// });
// // p1.then((value) => {
// //   console.log(value);
// // });
// // p2.then((value) => {
// //   console.log(value);
// // });
// // p3.then((value) => {
// //   console.log(value);
// // });

// // use Promise API

// //.all() -> Creates a Promise that is resolved with an array of results when all
// // of the provided Promises resolve, or rejected when any Promise is rejected.
// // let array=Promise.all([p1,p2,p3])
// // array.then((value)=>{
// //     console.log(value);
// // })

// //..allSettled([p1,p2,p3])  -> Creates a Promise that is resolved with an
// //  array of results when all of the provided Promises resolve or reject.
// // Promise.allSettled([p1,p2,p3]).then((value)=>{
// //     console.log(value);
// // })

// //.race()
// //Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.
// // Promise.race([p1, p2, p3]).then((value) => {
// //   console.log(value);
// // });

// // .any()
// // Description The Promise.any () method is one of the promise concurrency methods.
// //  This method is useful for returning the first promise that fulfills. 
// // It short-circuits after a promise fulfills, 
// //so it does not wait for the other promises to complete once it finds one

// // Promise.any([p1, p2, p3]).then((value) => console.log(value));

// // . resolve()
// // Promise.resolve([p3]).then((value)=>console.log(value))
// // . reject()
// Promise.reject([p1,p2,p3]).then((error)=>console.log(error))