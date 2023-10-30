
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Done p1");
    resolve(true);
  }, 5000);
});
p.then((value) => {
  console.log(value);
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(500);
    }, 2000);
  });
  return p1;
})
  .then((value) => {
    console.log(value);
    let p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("3rd Promise Rejected"));
      }, 1000);
    });
    return p1;
  })
  .then((value) => {
    console.log(value);
  },(error)=>{
    console.log(error);
  });
console.log("-----------------------------")
console.log(p.reject);
