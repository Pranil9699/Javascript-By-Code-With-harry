class Password{
    constructor(){
        this.password=''
    }
    generatePassword(len){
         let letters='abcdefghijklmnopqrstuvwxyz'
         let numbers='0123456789'
         let specialChars='`!@#$%^&*()-+_=;:",></?\|}]{['
        let master=[letters,numbers,specialChars];
        console.log("len : "+len);
        if(len<3){
            console.log("Password Must be gereter than 3 char.");
        }
        else{
            let i=0;
            while(i<len){
             let MainArray = master[Math.floor(Math.random()*master.length)]
             this.password+=MainArray[Math.floor(Math.random()*MainArray.length)]
             i++
            }

        }
        return this.password
    }
}
console.log(new Password().generatePassword(7));