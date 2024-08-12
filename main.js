let tl = gsap.timeline({scrollTrigger:{
    trigger: ".main",
    start: "90% 95%",
    end: "160% 50%",
    scrub: true,
    // markers:true,
}})

tl.to("#fanta", {
    top: "120%",
    right: "400px",
    rotate: 0,
    // width:"35%",
    transition: "all 0.5s",
})
// secound 2
let tl2 = gsap.timeline({scrollTrigger:{
    trigger: "#section1",
    start: "90% 50%",
    end: "140% 50%",
    scrub: true,
    // markers:true,
}})
tl2.to("#fanta",{
    top: "240%",
})
// third 3
let tl3 = gsap.timeline({scrollTrigger:{
    trigger: "#section2",
    start: "90% 50%",
    end: "120% 50%",
    scrub: true,
    // markers:true,
}})
tl3.to("#fanta",{
    top: "250%",
})

// fourth 4
let tl4 = gsap.timeline({scrollTrigger:{
    trigger: "#section2",
    start: "90% 50%",
    end: "120% 50%",
    scrub: true,
    // markers:true,
}})
tl4.to("#fanta",{
    top: "370%",
    right: "667px",
    width: "340px"
})