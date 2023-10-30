setTimeout(() => {
  console.log("Done1");
}, 100);
setTimeout(() => {
  console.log("Done2");
}, 200);
setTimeout(() => {
  console.log("Done3");
}, 300);
// setTimeout(() => {
//   try {
//     console.log("Hey" + rahul);
//   } catch (error) {
//     console.log("error inside Done4" + error);
//   }
// }, 400);
try {
  setTimeout(() => {
    console.log("Hey" + rahul);
  }, 400);
} catch (error) {
  console.log("error inside Done4" + error);
}
setTimeout(() => {
  console.log("Done5");
}, 500);
setTimeout(() => {
  console.log("Done7");
}, 600);
