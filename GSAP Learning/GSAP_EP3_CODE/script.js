gsap.from("#page1 #box", {
  scale: 0,
  delay: 1,
  duration: 1,
  rotate: 360,
});
gsap.from("#page2 #box", {
  scale: 0,
  delay: 1,
  //   duration: 1,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end:"top 40%",
    scrub:true,// used to soomth ness to the element , that value from 1 to 5 or t / f
  },
});
gsap.from("#page3 #box", {
  scale: 0,
  delay: 1,
  duration: 1,
  rotate: 360,
});
