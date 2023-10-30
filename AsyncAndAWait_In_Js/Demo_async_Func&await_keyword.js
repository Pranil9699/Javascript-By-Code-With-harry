async function gettingBCA_Degree() {
  let year1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log("getting first Year Degree...");
      resolve(90);
    }, 2000);
  });
  let year2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log("getting second Year Degree...");
      resolve(70);
    }, 4000);
  });
  let year3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log("getting last Year Degree...");
      resolve(80);
    }, 6000);
  });
  console.log("year1A fetching...");
  let year1A = await year1;
  console.log("getResult Year1A\nyear2A fetching...");
  let year2A = await year2;
  console.log("getResult Year2A\nyear3A fetching...");
  let year3A = await year3;
  console.log("getResult Year3A");
  return [year1A, year2A, year3A];
}

async function gettingMCA_Degree() {
  let year1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log("getting first Year Degree...");
      resolve(95);
    }, 2000);
  });
  let year2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log("getting last Year Degree...");
      resolve(85);
    }, 4000);
  });
  return [year1, year2];
}

// let resultBCA = Promise.allSettled(gettingBCA_Degree());
// let resultBCA = Promise.allSettled(gettingBCA_Degree()).then(
// Promise.allSettled(gettingBCA_Degree()).then(
//   (value) => console.log(value),
//   (error) => console.log(error)
// );

// const main1 = async () => {
//   let resultBCA = await gettingBCA_Degree();
//   // Promise.allSettled(resultBCA).then(
//   //   (v) => console.log(v),
//   //   (e) => console.log(e)
//   // );
//   // resultBCA.then((value) => console.log(value));
//   console.log("BCA Degree Finished!");

//   let resultMCA = await gettingMCA_Degree();
//   // resultMCA.then((value) => console.log(value));
//   // console.log("MCA Degree Finished!");

//   // let BCA = gettingBCA_Degree();
//   // let MCA = gettingMCA_Degree();
// };


pranil = async () => {
  let year1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
  let year2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  });
  let year3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 4000);
  });

  let y1 = await year1;
  let y2 = await year2;
  let y3 = await year3;
  return [y1,y2,y3];
};
const raj =async () => {
  console.log("Raj is here ...");
};

const main2 = async() => {
  console.log("Im main 2 ..");
  let resultPranil =await pranil();
  let resultRaj =await raj();
  resultPranil.then((value) => {
    console.log(value);
  });
};
main2();
