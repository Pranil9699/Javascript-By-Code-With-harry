// class RailwayForm{
//     submit(){
//         console.log(this.person+" Has Submitted Form For "+this.trainNo+" Train");
//     }
//     cancel(){
//         console.log(this.person+" Has Cancelled Form For "+this.trainNo+" Train");
//     }
//     fill(person,trainNo){
//         this.trainNo=trainNo
//         this.person=person
//     }
// }
// let Harry = new RailwayForm();
// let Pranil = new RailwayForm();

// Harry.fill('Haridas',921123);
// Pranil.fill('Chintu',420921);

// Pranil.submit();
// Harry.submit();
// Pranil.cancel();

class RailwayForm{
    submit(){
        console.log(this.person+" Has Submitted Form For "+this.trainNo+" Train");
    }
    cancel(){
        console.log(this.person+" Has Cancelled Form For "+this.trainNo+" Train");
    }
    constructor(person,trainNo){
        console.log("Construtor Called...")
        this.trainNo=trainNo
        this.person=person
    }
}
let Harry = new RailwayForm('Haridas',921123);
let Pranil = new RailwayForm('Chintu',420921);

Pranil.submit();
Harry.submit();
Pranil.cancel();
