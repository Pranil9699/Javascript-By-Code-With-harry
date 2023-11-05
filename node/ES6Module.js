export const hello=()=>{
    console.log("hi Pranil");
}
export const bye=(msg)=>{
    console.log(`Pranil ${msg}`);
}

const resume =(name,edu,cgpa)=>{
    return `Name = ${name}\nEduation = ${edu}\nCollege CGPA : ${cgpa}`
}
export default resume;