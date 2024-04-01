
gsap.from('.flex-box',{
    y:100,
opacity:0,
duration:0.6,
stagger:0.2,
scrollTrigger:{
    trigger:'.flex-box',
start:'top 60%',
end:'bottom 70%',
scrub:0.5
}
});