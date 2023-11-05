// const greeting1 = (name) => console.log(name);
// greeting1(`Pranil`)
// const greeting2 = (name,phone) => console.log(name+"'s phone number : "+phone);
// greeting2(`Pranil`,`9699532910`)

// let object = {
//   name: "Pranil",
//   role: "Java Devloper",
//   exp: "2 years",
//   show: function () {
//     setTimeout(function () {
//       console.log(
//         `My Name is ${this.name}\nI'm ${this.role} with ${this.exp} experience`
//       );
//     }, 2000);
//   },
// };
// object.show();
// In above case  the simple function do not know the value of 'this' after some time because is it windows object which store the current object 


let object = {
      name: "Pranil",
      role: "Java Devloper",
      exp: "2 years",
      show: function () {
        let that = this
        setTimeout(function () {
          console.log(
            `My Name is ${that.name}\nI'm ${that.role} with ${that.exp} experience`
          );
        }, 2000);
      },
    };
    object.show();




// let object = {
//   name: "Pranil",
//   role: "Java Devloper",
//   exp: "2 years",
//   show: function () {
//     setTimeout(function () {
//       console.log(
//         `My Name is ${this.name}\nI'm ${this.role} with ${this.exp} experience`
//       );
//     }, 2000);
//   },
// };
// object.show();
//In this case the arrow function will store current object it means 'the function with "this lexical structure"