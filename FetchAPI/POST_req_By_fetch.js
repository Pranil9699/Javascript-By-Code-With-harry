const createTodo = async (todo) => {
  let optiona = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  };
  let P = await fetch("https://jsonplaceholder.typicode.com/posts", optiona);
  let response = await P.json();
  return response;
};

const getTodo = async (id) => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  let r = await response.json();
  return r;
};

const main2 = async () => {
  let todo = {
    userId: 10,
    id: 1000023,
    title: "Pranil Takawane",
    completed: true,
  };
  let todor = await createTodo(todo);
  console.log(todor);
  let id = 90;
  console.log(`Getting the Todo ${id}`);
//   let getTodo =  getTodo(id);
  console.log(await getTodo(id));
};

main2();

// let userId = [];
// let id = [];
// let title = [];
// let body = [];

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((value) => {
//     return value.json();
//   })
//   .then((value) => {
//     value.forEach((element) => {
//       id.push(element.id);
//       userId.push(element.userId);
//       title.push(element.title);
//       body.push(element.body);
//     });
//   })
//   .catch((error) => console.log());

// // let data = { userId, id, title, body };
// // console.log(data+" "+data.body.length);
// // for (let index = 0; index < title.length; index++) {
// //   console.log(title.pop);
// // }
// // title.forEach((e)=>title.pop(e).log())
// for (let index = 0; index < title.length; index++) {
//    console.log(title[index]);

// }
