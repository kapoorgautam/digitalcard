var tl = gsap.timeline();
tl.from("#nav img , #nav h2  , #nav button", {
    duration: 0.5, 
    delay:0.5,
     y: -150, 
     opacity: 0,
     stagger:0.1,
})
tl.from("#hero .btn button",{
    x: -150,
    opacity: 0,
})


