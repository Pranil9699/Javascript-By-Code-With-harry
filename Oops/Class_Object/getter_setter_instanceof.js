class Animal{
    constructor(name){
        this.name=name;
    }
    get name(){
    return this._name;
    }
    set name(name){
        this._name=name;
    }
    run(){
        console.log("Animal Name is "+this.name);
    }
}
class Dog extends Animal{
    boff(){
        console.log(`${super.name} is shoutting`);
    }
}
let object = new Dog("Rocky")
// object.boff()
object.run()
console.log(object instanceof Animal);
console.log(object instanceof Dog);
object = new Animal(object.name)
console.log(object instanceof Animal);
console.log(object instanceof Dog);
