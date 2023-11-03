// class Complex{
//     constructor(real,imaginary){
//         this.real=real;
//         this.imaginary=imaginary;
//     }
//     add(num){
//         this.real = this.real +num.real;
//         this.imaginary = this.imaginary +num.imaginary;
//     }
// }
// let Num1 = new Complex(2,4)
// let Num2 = new Complex(6,3)
// Num1.add(Num2);
// console.log(`${Num1.real}+${Num1.imaginary}i`);

class Human{
    constructor(name,favFood){
        this.name=name;
        this.favFood=favFood;
    }
    eating(){
        console.log("Human Eat Veg And Non-Veg");
    }
}
class Student{
    eating(){
        console.log("Stuent Eat Veg With Maggi");
    }
}
let a =new Student("Pranil","Maggi")
a.eating()