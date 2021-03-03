const tl = gsap.timeline({defaults:{ease:'power1.out'}});

tl.to('.stick-circle', {rotate: "1440deg", duration: 1.5});
tl.to('.stick-circle', {borderRadius: "50%", duration: 0.01});
tl.to('.stick-circle', {height: "300px", top: "calc(50% - 150px)"});
tl.to('.top', {top: "-1%", duration: 0.2});
tl.to('.bottom', {bottom: "-1%", duration: 0.2}, "-=0.2");
tl.to('.mini', {marginLeft: "0%", duration: 2});
tl.to('.mini', {width: "95%", height: "95%", duration: 1.5});
tl.to('.text', {display: "block"})

document.querySelector(".mini").addEventListener("click", ()=>{
    tl.to('.top', {y:"-100%", duration: 1});
    tl.to('.bottom', {y:"100%", duration: 1}, "-=1");
    tl.to('.mini',{y: "-200%"})
});