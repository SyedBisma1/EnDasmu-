

var tl = gsap.timeline();

tl.from(" #nav h2, #nav button",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0.1,
    stagger:0.2,
});
   
tl.from("#page1 h1,#page1 p , #page1 button",{
    opacity:0,
    x:-100,
    delay:0.1,
    duration:1,
       
})

tl.from("#page1 img",{
    opacity:0,
    x:100,
    delay:0.1,
    duration:1,
       
})
tl.from("#btmdiv",{
    opacity:0,
    z:100,
    delay:1,
    duration:1,
})

tl.from("#card-part",{
    opacity:0,
    x:-200,
    delay:0.1,
    duration:1,
});
tl.from("#text-part2",{
    opacity:0,
    x:200,
    delay:0.1,
    duration:1,
});
tl.from("#page3",{
    opacity:0,
    z:200,
    delay:0.1,
    duration:1,
});