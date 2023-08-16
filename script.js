var tl = gsap.timeline();
tl.from("#nav img , #nav h2  , #nav button", {
    duration: 0.5, 
    delay:0.5,
     y: -150, 
     opacity: 0,
     stagger:0.1,
})
tl.from("#main h1",{
    duration: 0.5,
    y: 150,
    opacity: 0,
    // stagger:0.1,
})
tl.from("#main #bg-img",{
    duration: 0.5,
    x: -130,
    opacity: 0,
    scale: 1,
})
tl.from("#main .btn button",{
    x: -150,
    opacity: 0,
})
tl.from("#main .right ul",{
    x: -100,
    opacity: 0,
})
tl.from("#main .left ul",{
    x: 100,
    opacity: 0,
})

