// gsap.to("#box",{
//     x:900,
    // y:300,
//     duration : 2,
//     delay:1,
//     backgroundColor:"#000",
//     rotate:90,
//     scale:0.1
// })
// gsap.from("#box",{
//     x:900,
//     y:300,
//     duration : 2,
//     delay:1,
//     bbackgroundColor:"#000",
//     rotate:90,
//     scale:0.1,
// })

// gsap.to("h1",{
//     x:600,
//     color:"orange",
//     duration:2,
//     delay:1,
// })
// gsap.to("h2",{
//     x:600,
//     color:"salmon",
//     duration:2,
//     delay:3,
// })
// gsap.to("h3",{
//     x:600,
//     color:"black",
//     duration:2,
//     delay:5,
// })

// gsap.to("h1",{
//     x:600,
//     // textAlign:"center",
//     duration:1,
//     delay:0.5,
//     stagger:1,
//     repeat:-1,
//     yoyo:true,
// })


// time line which used to sychronize the element to each other 
let t = gsap.timeline()
t.to("h1",{
    x:700,
    duration:1,
    
})
t.to("h2",{
    x:700,
    duration:1,
    
})
t.to("h3",{
    x:700,
    duration:1,
    
})