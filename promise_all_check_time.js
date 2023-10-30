let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
};

let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 3000);
  });
};

let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30);
    }, 2000);
  });
};

const run = async () => {
  console.log("run");
  // let a1 = await p1()
  // let a2 = await p2()
  // let a3  = await p3()
  // console.log(a1,a2,a3);

  let a1 = p1();
  let a2 = p2();
  let a3 = p3();
  console.log("Started");
  let a1a2a3 =await Promise.all([a1,a2,a3]);
  console.log("Ended");
  console.log(a1a2a3);
  // console.timeEnd();
};
run();
