const func = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Come inside Promise...");
      reject(new Error("Im getting the error..."));
    }, 3000);
  })
}
const main2 = async () => {

  try {
    console.log("Start Bro.. ");
    let gettingPromise = await func();
    gettingPromise.then((Value)=>{
        console.log(Value);
    })
  } catch (error) {
    console.log(error)
  }
}
main2();
