var tl= gsap.timeline()

tl.from(" #nav .nav-part1 ,.nav-part2 h2,.nav-part3 button",{
    y:-50,
    duration:0.6,
    delay:1,
    stagger:0.5,
    opacity:0,
    scale:1,


})

tl.from(" img",{
    x:-900,
    duration:0.4,
    delay:.8,
    stagger:0.3,
    rotate:360,
    opacity:0,
    scale:0,


})
  
tl.from("h1",{
    y:100,
    duration:1,
    delay:.3,
    opacity:0,
    scale:1,
})