const func =async(n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("This will resolve after "+n+" Seconds")
        }, 1000*n);

    })
}

(async()=>{
    let p1=await func(4);
    console.log(p1);
    let p2=await func(2);
    console.log(p2);

})()