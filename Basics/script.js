// gsap.from("h1", {
//     color: "black",
//     opacity: 0,
//     duration: 2,
//     delay: 1,
//     stagger: 0.5,
// })

// gsap.to("#box1", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "blue",
//     borderRadius: "40%",
//     repeat: -1,
//     yoyo: true,
// })

// gsap.from("#box2", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
// })

var tl = gsap.timeline();
tl.to("#box1", {
    x: 1500,
    rotate: 360,
    duration: 1.5,
    delay: 1,
})
tl.to("#box2", {
    x: 1500,
    duration: 1.5,
})